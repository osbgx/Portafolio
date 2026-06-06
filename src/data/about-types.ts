export interface StatItem {
  label: string;
  full: string;
  icon: string;
  val: string;
  tier: string;
  color: string;
  w: number;
  bonus?: string;
}

export interface EquipmentItem {
  icon: string;
  name: string;
  stats: string;
  desc: string;
  color: string;
}

export interface StatusEffectItem {
  icon: string;
  label: string;
  type: string;
  stats: string;
  desc: string;
  color: string;
}

export interface MemoryLog {
  id: string;
  nav: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  text: string;
  reward: string;
  fragments?: MemoryFragment[];
}

export interface MemoryFragment {
  id: string;
  title: string;
  label: string;
  text: string;
}

export interface QuestMeta {
  quest: string;
  sub: string;
  text: string;
  id: string;
  arc: string;
  type: string;
  reward: string;
  statGain: string;
  status: string;
  mood: string;
  number: string;
  relatedSection?: string;
}

export interface DevLoreEntry {
  source: string;
  quote: string;
  category: string;
  description: string;
  tags: string[];
}

export interface BossEntry {
  name: string;
  subtitle: string;
  category: string;
  rank: string;
  hp: number;
  domain: string;
  encounter: string;
  desc: string;
  reward: string;
  signal: string;
  status: string;
}

export interface RescueIntro {
  emoji: string;
  title: string;
  subtitle: string;
  flavor: string;
  stats: string;
  outcome: string;
}

export interface RescueGuildStat {
  icon: string;
  label: string;
  stat: string;
  tier: string;
  color: string;
}

export interface RescueDexEntry {
  icon: string;
  name: string;
  nickname: string;
  species: string;
  bio: string;
  level: string;
}

export interface RescueFieldNote {
  id: string;
  title: string;
  date: string;
  text: string;
  icon: string;
}

export interface RescueCareRouteEntry {
  name: string;
  area: string;
  items: string[];
  npcs: string[];
}

export interface RoomHotspot {
  id: string;
  x: number;
  y: number;
  radius: number;
  targetSection: string;
  ariaLabel: string;
}
