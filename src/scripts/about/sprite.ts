import { randomRange } from './random';

type SpriteAnimation = {
  frames?: string[];
  weight?: number;
  delay?: number;
  hold?: number;
  rest?: number[];
  antiflash?: boolean;
};

type SpriteData = {
  base?: string;
  animations?: SpriteAnimation[];
  reactions?: Record<string, SpriteAnimation>;
};

function parseSpriteData(): SpriteData | null {
  const spriteDataNode = document.getElementById('about-sprite-sequences');
  try {
    return spriteDataNode ? JSON.parse(spriteDataNode.textContent || '{}') : null;
  } catch (_) {
    return null;
  }
}

function preloadSprites(frames: string[]) {
  return Promise.all([...new Set(frames)].map(src => new Promise(resolve => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve(src);
    };
    const img = new Image();
    img.onload = finish;
    img.onerror = finish;
    img.src = src;
    if (img.decode) img.decode().then(finish).catch(finish);
  })));
}

function pickAnimation(animations?: SpriteAnimation[]) {
  const safeAnimations = animations?.filter(animation => animation?.frames?.length) || [];
  const total = safeAnimations.reduce((sum, animation) => sum + (animation.weight || 1), 0);
  let roll = Math.random() * total;
  for (const animation of safeAnimations) {
    roll -= animation.weight || 1;
    if (roll <= 0) return animation;
  }
  return safeAnimations[0];
}

export function initSpriteSequencer(reduceMotion: boolean) {
  const spriteFrames = [...document.querySelectorAll<HTMLImageElement>('[data-sprite-frame]')];
  const spriteData = parseSpriteData();
  let spriteTimer: number | null = null;
  let reactionTimer: number | null = null;

  function clearTimer(timer: number | null) {
    if (timer) window.clearTimeout(timer);
  }

  function setSpriteFrame(src?: string, keepBaseVisible = false) {
    if (!spriteFrames.length || !src) return;
    spriteFrames.forEach(frame => {
      const isActive = frame.dataset.spriteFrame === src;
      const isAntiflashBase = keepBaseVisible && frame.dataset.spriteFrame === spriteData?.base;
      frame.classList.toggle('is-active', isActive);
      frame.classList.toggle('is-antiflash-base', isAntiflashBase && !isActive);
      frame.setAttribute('aria-hidden', isActive || isAntiflashBase ? 'false' : 'true');
    });
  }

  function runSpriteFrames(frames: string[] | undefined, done?: () => void, frameDelay = 32, holdDelay = 0) {
    if (!frames?.length) {
      done?.();
      return;
    }
    let index = 0;
    const holdIndex = Math.max(1, frames.length - 2);
    const tick = () => {
      const currentIndex = index;
      setSpriteFrame(frames[currentIndex]);
      index += 1;
      if (index < frames.length) {
        const delay = holdDelay > 0 && currentIndex === holdIndex ? holdDelay : frameDelay;
        spriteTimer = window.setTimeout(tick, delay);
      } else {
        done?.();
      }
    };
    tick();
  }

  function scheduleIdle(delay = randomRange([5000, 12000])) {
    clearTimer(spriteTimer);
    spriteTimer = window.setTimeout(playNextIdle, delay);
  }

  function playNextIdle() {
    const animation = pickAnimation(spriteData?.animations);
    if (!animation) return;
    runSpriteFrames(animation.frames, () => {
      setSpriteFrame(spriteData?.base);
      scheduleIdle(randomRange(animation.rest));
    }, animation.delay || 32);
  }

  async function startSpriteLoop() {
    if (!spriteFrames.length || !spriteData?.base || reduceMotion) return;
    const allFrames = [
      spriteData.base,
      ...(spriteData.animations || []).flatMap(animation => animation.frames || []),
      ...Object.values(spriteData.reactions || {}).flatMap(reaction => reaction.frames || []),
    ];
    await preloadSprites(allFrames);
    setSpriteFrame(spriteData.base);
    scheduleIdle(randomRange([3000, 7000]));
  }

  startSpriteLoop();

  return {
    playReaction(id?: string) {
      const reaction = id ? spriteData?.reactions?.[id] : undefined;
      if (!reaction?.frames?.length || reduceMotion) return;
      clearTimer(spriteTimer);
      clearTimer(reactionTimer);
      const keepBaseVisible = reaction.antiflash !== false;
      runSpriteFrames(reaction.frames, () => {
        setSpriteFrame(spriteData?.base);
        reactionTimer = window.setTimeout(() => scheduleIdle(randomRange([3500, 7000])), 300);
      }, reaction.delay || 140, reaction.hold || 2200);
      if (keepBaseVisible) setSpriteFrame(spriteData?.base, true);
    },
    cleanup() {
      clearTimer(spriteTimer);
      clearTimer(reactionTimer);
    },
  };
}
