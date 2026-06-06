type AudioContextCtor = typeof AudioContext;

const sectionNotes: Record<string, number[]> = {
  memory: [392, 523, 659],
  quests: [660, 880],
  bosses: [494, 659, 880],
  'dev-lore': [784, 988],
  rescue: [440, 587, 740],
  room: [523, 659, 784],
};

export function createSoundEngine() {
  let audioCtx: AudioContext | null = null;

  function initAudio() {
    const Ctor = (window.AudioContext || (window as unknown as { webkitAudioContext?: AudioContextCtor }).webkitAudioContext) as AudioContextCtor | undefined;
    if (!Ctor) return null;
    if (!audioCtx) audioCtx = new Ctor();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playNote(freq: number, duration: number, vol = 0.08, type: OscillatorType = 'square') {
    try {
      const ctx = initAudio();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (_) {
      // Audio is optional; ignore browser/autoplay failures.
    }
  }

  return {
    sfxOpen(sectionId?: string) {
      const notes = sectionNotes[sectionId || ''] || [660, 880];
      notes.forEach((freq, index) => setTimeout(() => playNote(freq, 0.06), index * 60));
    },
    sfxClose() {
      playNote(440, 0.06);
      setTimeout(() => playNote(330, 0.08), 50);
    },
    sfxSelect() {
      playNote(1000, 0.04);
    },
  };
}

export function spawnSparkles(x: number, y: number, reduceMotion: boolean) {
  if (reduceMotion) return;
  const colors = ['#d4a030', '#e8b840', '#f0c850', '#ffe080'];
  const count = 10;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;width:4px;height:4px;background:${colors[i % colors.length]};left:${x}px;top:${y}px;pointer-events:none;z-index:999;image-rendering:pixelated;`;
    document.body.appendChild(el);
    const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.6;
    const distance = 40 + Math.random() * 60;
    el.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 },
    ], { duration: 400 + Math.random() * 200, easing: 'steps(6,end)' }).onfinish = () => el.remove();
  }
}
