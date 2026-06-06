export interface DiscoveryState {
  sections: Set<string>;
  hotspots: Set<string>;
  codex: Set<string>;
  quests: Set<string>;
  bosses: Set<string>;
  rescue: Set<string>;
  memory: Set<string>;
  secrets: Set<string>;
  achievements: Set<string>;
}

export interface Totals {
  sectionTotal: number;
  roomHotspotTotal: number;
  memoryTotal: number;
  sideQuestTotal: number;
  codexTotal: number;
  bossTotal: number;
  rescueTotal: number;
}

export interface CoreCapabilities {
  updateBubble: (msg: string) => void;
  updateAvatarStatus: (msg: string) => void;
  showToast: (title: string, text: string) => void;
  playReaction: (id?: string) => void;
  spawnSparkles: (x: number, y: number) => void;
  sfxOpen: (sectionId?: string) => void;
  sfxClose: () => void;
  sfxSelect: () => void;
}
