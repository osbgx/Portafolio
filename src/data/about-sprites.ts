import { withBase } from '../utils/paths';

const spriteBase = withBase('/pixel/frames/base.webp');
const spritePath = (name: string) => withBase(`/pixel/frames/${name}`);

export const spriteSequences = {
  base: spriteBase,
  idle: [spriteBase],
  animations: [
    {
      id: 'blink',
      weight: 8,
      delay: 32,
      rest: [5000, 15000],
      frames: [spriteBase, spritePath('blink_01.webp'), spritePath('blink_02.webp'), spritePath('blink_03.webp'), spritePath('blink_02.webp'), spritePath('blink_01.webp'), spriteBase],
    },
    {
      id: 'black-cat-blink',
      weight: 2,
      delay: 90,
      rest: [7000, 18000],
      frames: [spriteBase, spritePath('black_cat_blink.webp'), spriteBase],
    },
    {
      id: 'orange-cat-blink',
      weight: 2,
      delay: 90,
      rest: [7000, 18000],
      frames: [spriteBase, spritePath('orange_cat_blink.webp'), spriteBase],
    },
    {
      id: 'bird-blink',
      weight: 1,
      delay: 90,
      rest: [9000, 22000],
      frames: [spriteBase, spritePath('bird_blink.webp'), spriteBase],
    },
    {
      id: 'possum-blink',
      weight: 1,
      delay: 90,
      rest: [9000, 22000],
      frames: [spriteBase, spritePath('possum_blink.webp'), spriteBase],
    },
  ],
  reactions: {
    memory: { delay: 130, hold: 2800, antiflash: true, frames: [spriteBase, spritePath('wink_01.webp'), spriteBase] },
    'dev-lore': { delay: 130, hold: 2800, antiflash: true, frames: [spriteBase, spritePath('detective_01.webp'), spriteBase] },
    quests: { delay: 130, hold: 3000, antiflash: false, frames: [spriteBase, spritePath('eureka_01.webp'), spriteBase] },
    bosses: { delay: 120, hold: 2800, antiflash: true, frames: [spriteBase, spritePath('determined_01.webp'), spriteBase] },
    rescue: { delay: 120, hold: 2800, antiflash: true, frames: [spriteBase, spritePath('happy_01.webp'), spriteBase] },
    room: { delay: 120, hold: 2400, antiflash: true, frames: [spriteBase, spritePath('kawaii_01.webp'), spriteBase] },
  },
} as const;

export const spriteFrames = [...new Set([
  spriteSequences.base,
  ...spriteSequences.idle,
  ...spriteSequences.animations.flatMap(animation => animation.frames),
  ...Object.values(spriteSequences.reactions).flatMap(reaction => reaction.frames),
])];
