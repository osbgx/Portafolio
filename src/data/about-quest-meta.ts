type BaseQuest = {
  quest: string;
  sub: string;
  text: string;
};

const questMetadata = [
  { id: 'installing-arch', arc: 'Origin Tech Chaos', type: 'Tutorial Disaster', reward: '+2 Linux Trauma · +1 Partition Sense', statGain: 'INT +1 · PATIENCE +1', status: 'COMPLETED', mood: 'Ah sí, la clásica: tocar particiones sin entender particiones.' },
  { id: 'redstone-degree', arc: 'Origin Tech Chaos', type: 'Server Incident', reward: '+2 Systems Thinking · +1 Modpack Regret', statGain: 'SYS +2 · PATIENCE +1', status: 'COMPLETED', mood: 'Cinco minutos de uptime. Récord personal del reactor.' },
  { id: 'phoenix-down', arc: 'Origin Tech Chaos', type: 'Hardware Necromancy', reward: '+3 Recovery Luck · Sketchy USB Cable', statGain: 'LCK +3 · FAITH +1', status: 'COMPLETED?', mood: 'No debería haber funcionado. Eso es justamente lo hermoso.' },
  { id: 'mission-failed-successfully', arc: 'Builder Brain', type: 'Automation Goblin', reward: '+1 Automation Instinct · +10 Dopamine', statGain: 'AUTO +1 · MOOD +10', status: 'COMPLETED', mood: 'Diez segundos al día no cambian el mundo, pero cambian el alma.' },
  { id: 'you-died', arc: 'Origin Tech Chaos', type: 'Deploy Trauma', reward: '+2 Backup Respect · +1 Log Awareness', statGain: 'VIT +1 · WIS +2', status: 'STILL HAUNTS ME', mood: 'Los backups no son opcionales. Son religión.' },
  { id: 'nani', arc: 'Glitch & Recovery', type: 'Glitch Event', reward: '+1 Acceptance · +1 Cosmic Fear', statGain: 'WIS +1 · FEAR +1', status: 'UNEXPLAINED', mood: 'No lo arreglaste. El universo decidió perdonarte.' },
  { id: 'failed-tame-attempt', arc: 'Creature Side Quest', type: 'Creature Encounter', reward: '+3 Empathy · Cat Scratch Resistance', statGain: 'EMP +3 · DEF +1', status: 'COMPANION QUEST', mood: 'Claramente faltaba nivel para esa captura.', relatedSection: 'rescue' },
  { id: 'code-em-all', arc: 'Builder Brain', type: 'Script Collection', reward: '+2 Scripting · PC Box Full', statGain: 'SCRIPT +2 · INV +1', status: 'COMPLETED', mood: 'Scripts olvidados, pero emocionalmente importantes.' },
  { id: 'pixel-forge', arc: 'Builder Brain', type: 'Creative Unlock', reward: '+2 Pixel Craft · Worldbuilding Spark', statGain: 'CRAFT +2 · LORE +1', status: 'COMPLETED', mood: 'Entraste por curiosidad. Saliste con un bioma.' },
  { id: 'emulator-arc', arc: 'Digital Hoarder', type: 'Region Unlock', reward: '+2 Patience · BIOS Hunter', statGain: 'PATIENCE +2 · MAP +1', status: 'REGION UNLOCKED', mood: 'Contenido bloqueado por región. Voluntad desbloqueada por terquedad.' },
  { id: 'forbidden-backup', arc: 'Digital Hoarder', type: 'Digital Hoarding', reward: '+1 Preparedness · -5 Disk Space', statGain: 'PREP +1 · DISK -5', status: 'STORED FOREVER', mood: 'No lo vas a usar. Pero dormirás mejor sabiendo que existe.' },
  { id: 'afk-automation', arc: 'Builder Brain', type: 'Passive Farming', reward: '+2 Automation · Idle Resource Gain', statGain: 'AUTO +2 · IDLE +1', status: 'COMPLETED', mood: 'Si el script farmea solo, técnicamente estás trabajando.' },
  { id: 'softlock-escape', arc: 'Glitch & Recovery', type: 'Glitch Recovery', reward: '+2 Lateral Thinking · Emergency Exit', statGain: 'DEX +1 · WIS +2', status: 'ESCAPED', mood: 'No era la solución oficial, pero era una solución.' },
  { id: 'inventory-tetris', arc: 'Digital Hoarder', type: 'Organization Ritual', reward: '+1 File Order · +1 False Control', statGain: 'ORDER +1 · COPIUM +1', status: 'COMPLETED', mood: 'Nunca queda perfecto. Pero queda menos mal, que ya es bastante.' },
  { id: 'overclocked-curiosity', arc: 'Builder Brain', type: 'Optional Grind', reward: '+3 Curiosity · Useless Knowledge, Actually Useful Later', statGain: 'CUR +3 · INT +1', status: 'OPTIONAL GRIND', mood: 'Grindear stats inútiles es inútil hasta que deja de serlo.' },
  { id: 'lost-save-file', arc: 'Glitch & Recovery', type: 'Emotional Damage', reward: '+2 Detachment · Backup Philosophy', statGain: 'DETACH +2 · WIS +1', status: 'CORRUPTED', mood: 'Dolió, pero enseñó a no confiar en un solo slot.' },
] as const;

export function createQuestMeta<T extends BaseQuest>(quests: T[]) {
  return quests.map((quest, index) => {
    const metadata = questMetadata[index];
    if (!metadata) throw new Error(`Missing about quest metadata for index ${index}`);

    return {
      ...quest,
      ...metadata,
      number: String(index + 1).padStart(2, '0'),
    };
  });
}
