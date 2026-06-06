export const stats = [
  { label: 'HP', full: 'Stability', icon: 'ra-health', val: '18/23', tier: 'Stable', color: '#e84040', w: 78, bonus: 'Aguanta bastante, pero necesita descansos reales.' },
  { label: 'MP', full: 'Creative Energy', icon: 'ra-crystal-wand', val: '14/23', tier: 'Variable', color: '#4080f0', w: 61, bonus: 'Sube de noche. Baja con ruido, pings y reuniones largas.' },
  { label: 'STR', full: 'Willpower', icon: 'ra-muscle-up', val: '10/20', tier: 'Average', color: '#e84040', w: 50, bonus: 'Fuerza media. Terco cuando la quest importa.' },
  { label: 'INT', full: 'Problem Solving', icon: 'ra-brain-freeze', val: '18/20', tier: 'Main Stat', color: '#a040d0', w: 90, bonus: '+2 con café. +5 si el bug también ofendió mi orgullo.' },
  { label: 'DEX', full: 'Adaptability', icon: 'ra-archery-target', val: '13/20', tier: 'Useful', color: '#f0b830', w: 65, bonus: 'Improvisa rutas cuando el mapa no carga.' },
  { label: 'VIT', full: 'Resilience', icon: 'ra-shield', val: '16/20', tier: 'High', color: '#40b050', w: 80, bonus: 'Recibe daño emocional, pero sigue caminando.' },
  { label: 'LCK', full: 'RNG in Life', icon: 'ra-clover', val: '15/20', tier: 'Blessed', color: '#f060a0', w: 75, bonus: 'Aparecen cosas buenas cuando no las estaba farmeando.' },
  { label: 'SPD', full: 'Execution Speed', icon: 'ra-fast-ship', val: '12/20', tier: 'Burst', color: '#40d0d0', w: 60, bonus: 'No siempre rápido. Mejor cuando entra en flow.' },
  { label: 'WIS', full: 'Insight', icon: 'ra-crystal-ball', val: '17/20', tier: 'High', color: '#60b0f0', w: 85, bonus: 'Aprende tarde, pero aprende profundo.' },
] as const;

export const equipment = [
  { icon: 'ra-gear-hammer', name: 'ARMA · Teclado Mecánico', stats: '+8 ATK · +5 VEL · +10 CLICK SATISFACTION', desc: 'Efectivo contra bugs menores. Ineficaz contra existenciales.', color: 'text-emerald-300' },
  { icon: 'ra-vest', name: 'ARMADURA · Hoodie + Joggers', stats: '+12 DEF · +80 COMODIDAD · +5 CALORCITO', desc: 'Reduce daño social. Aumenta defensa en días nublados.', color: 'text-blue-300' },
  { icon: 'ra-ocarina', name: 'ACCS · Audífonos ANC', stats: '+120 FOCUS · -90% RUIDO · +3 OST IMMERSION', desc: 'Activa el modo No molestar.', color: 'text-purple-300' },
  { icon: 'ra-aware', name: 'ACCS · Lentes de Descanso', stats: '+25 STAMINA · +10 CLARIDAD · -5 FATIGA OCULAR', desc: 'Permiten sesiones largas sin sacrificar HP.', color: 'text-cyan-300' },
  { icon: 'ra-speech-bubble', name: 'ACCS · Rubber Duck Debugger', stats: '+15 SANITY · +20 INSIGHT · -10 OVERTHINKING', desc: 'Escucha sin juzgar. Si empieza a responder, corré.', color: 'text-yellow-300' },
  { icon: 'ra-gamepad-cross', name: 'ACCS · Mousepad "Ergo Waifu Edition"', stats: '+12 CONFORT · +8 PRECISIÓN · +5 HP REGEN', desc: 'Diseño anatómico. No se discute.', color: 'text-pink-300' },
  { icon: 'ra-book', name: 'ARMA SECUNDARIA · Notebook de Batalla', stats: '+40 MULTITASK · +15 VEL · +10 CAOS CONTROLADO', desc: 'Permite multitask intenso. Riesgo de abrir 27 pestañas.', color: 'text-gray-300' },
  { icon: 'ra-ammo-bag', name: 'MOCHILA · Backpack Universitaria', stats: '+20 INV · +10 UTILIDAD · +3 RESPONSABILIDAD', desc: 'Capacidad variable según el caos del día.', color: 'text-amber-300' },
  { icon: 'ra-jigsaw-piece', name: 'TOOLS · Pocket Focus Kit', stats: '+30 CONCENTRACIÓN · +15 CALMA · -20 ANSIEDAD', desc: 'Activa el modo cerebro en buffering.', color: 'text-orange-300' },
  { icon: 'ra-coffee-mug', name: 'CONSUMIBLE · Taza de Café', stats: '+40 MP · +10 VEL · -5 HORARIO DE SUEÑO', desc: 'Efecto prolongado. Riesgo de hiperfijación x2.', color: 'text-amber-400' },
  { icon: 'ra-kettlebell', name: 'TOOLS · Mancuerna de Escritorio', stats: '+5 STR · +3 VIT · +1 AUTOESTIMA', desc: 'Ideal para micro‑pausas. No garantiza músculos, sí dopamina.', color: 'text-red-300' },
  { icon: 'ra-cat', name: 'PET COMPANION · Gato Bugueado', stats: '+∞ CARIÑO · +50 CALMA · -20 PRODUCTIVIDAD', desc: 'Se duerme encima del teclado. No se puede desequipar.', color: 'text-green-300' },
  { icon: 'ra-sprout-emblem', name: 'ITEM SECRETO · Fragmento de Tranquilidad', stats: '+25 HP · +10 FOCUS · +5 MOOD', desc: 'Un pequeño recordatorio de que no todo tiene que resolverse hoy.', color: 'text-white' },
] as const;

export const statusEffects = [
  { icon: 'ra-water-drop', label: 'Rain Focus', type: 'BUFF', stats: '+2 WIS · +2 MP regen', desc: 'El clima baja el ruido del mapa.', color: 'text-blue-300' },
  { icon: 'ra-ocarina', label: 'OST en Loop', type: 'BUFF', stats: '+3 SPD en tareas repetibles', desc: 'La música marca el tempo del grind.', color: 'text-purple-300' },
  { icon: 'ra-spiral-shell', label: 'Controlled Chaos', type: 'STATE', stats: '+2 DEX · -1 inventory order', desc: 'No parece orden, pero hay sistema debajo.', color: 'text-amber-300' },
  { icon: 'ra-moon-sun', label: 'Quiet Hours', type: 'BUFF', stats: '+3 INT · +2 WIS · -2 social noise', desc: 'El silencio abre espacio para pensar.', color: 'text-cyan-300' },
  { icon: 'ra-ice-cube', label: 'Café Tibio', type: 'DEBUFF', stats: '-1 MP regen · +1 refill urgency', desc: 'No es grave, solo decepcionante.', color: 'text-blue-200' },
  { icon: 'ra-fire-symbol', label: 'Momentum', type: 'BUFF', stats: '+4 SPD · +2 STR while active', desc: 'Cuando fluye, conviene no romper el combo.', color: 'text-red-300' },
  { icon: 'ra-ringing-bell', label: 'Notification Ping', type: 'DEBUFF', stats: '-2 INT focus · +1 reaction speed', desc: 'No era importante, pero igual miraste.', color: 'text-yellow-200' },
  { icon: 'ra-speech-bubble', label: 'Doomscroll Trap', type: 'DEBUFF', stats: '-3 MP · +1 useless trivia', desc: 'Solo ibas a revisar la hora.', color: 'text-gray-300' },
  { icon: 'ra-vial', label: 'Low Hydration', type: 'WARNING', stats: '-1 HP regen until refill', desc: 'Un sorbo y vuelve el mundo.', color: 'text-cyan-200' },
  { icon: 'ra-tombstone', label: 'Side Project Ghost', type: 'CURSE', stats: '-1 focus · +2 future ideas', desc: 'No es urgente, pero existe.', color: 'text-orange-200' },
] as const;
