export const rescueIntro = [
  'Si desaparezco un rato, probablemente estoy ayudando a algun animal. No lo digo como cosa heroica. Simplemente pasa. Aparece alguien chiquito, asustado o perdido, y bueno... side quest aceptada.',
  'En mi casa los rescates no empezaron conmigo: mis padres ya lo hacian antes de que yo naciera. Asi que no recuerdo "el primer rescate". Para mi simplemente era parte del mundo: si alguien necesita ayuda y podes hacer algo, haces algo.',
] as const;

export const rescueGuildStats = [
  { value: '100+', label: 'encounters helped', note: 'helped, rescued, fed, moved, treated or guided' },
  { value: '17', label: 'cats currently in the guild', note: 'guild size exceeded recommended limits' },
  { value: '2', label: 'dogs currently in the guild', note: 'loyal chaos units online' },
  { value: '2', label: 'opossums registered', note: 'rare encounters remembered' },
  { value: 'ACTIVE', label: 'medical cases', note: 'food, meds, vet routes and castration queue' },
] as const;

export const rescueDexEntries = [
  {
    type: 'CAT',
    icon: 'ra-cat',
    encounterRate: 'Extremely high',
    status: 'self-rescue compatible',
    notes: 'Appears, evaluates the base, decides to stay.',
  },
  {
    type: 'DOG',
    icon: 'ra-wolf-head',
    encounterRate: 'Common',
    status: 'loyal chaos unit',
    notes: 'Takes space, gives affection, unlocks unexpected expenses.',
  },
  {
    type: 'OPOSSUM',
    icon: 'ra-rabbit',
    encounterRate: 'Rare',
    status: 'registered in save file',
    notes: 'Not the main symbol, but rare encounters are remembered.',
  },
  {
    type: 'BIRD',
    icon: 'ra-raven',
    encounterRate: 'Uncommon',
    status: 'fragile encounter',
    notes: 'Requires care, calm and zero stupid movements.',
  },
] as const;

export const rescueFieldNotes = [
  {
    id: 'auto-rescue-system',
    number: '01',
    title: 'Auto Rescue System',
    text: [
      'Algunos gatos no esperan a ser rescatados. Llegan, comen, duermen, se instalan y de pronto ya forman parte del inventario permanente.',
      'Uno cree que esta "viendo que hacer". El gato ya decidio que la quest termino.',
    ],
  },
  {
    id: 'failed-tame-attempt',
    number: '02',
    title: 'Failed Tame Attempt',
    text: [
      'Una vez fuimos a la casa de unos abuelitos con una colonia de gatos que no paraba de crecer. La idea era capturar la mayor cantidad posible para una jornada de castracion.',
      'Todo iba razonablemente bien hasta que intente agarrar a unos pequenos. La mama decidio defenderlos con toda la logica del mundo y cero respeto por mi hitbox facial.',
      'Yo estaba en la puerta para que no escaparan. Ella me salto a la cara, uso mi cabeza como plataforma y paso por encima.',
      'Claramente no tenia suficiente nivel para esa mision.',
    ],
  },
  {
    id: 'rare-encounter',
    number: '03',
    title: 'Rare Encounter',
    text: [
      'Entre tantos gatos y perros, dos zarigueyas quedaron registradas en el save file simplemente porque eran distintas.',
      'No son mi simbolo principal. Son mas bien esos encuentros raros que aparecen una vez cada muchas rutas y despues quedan guardados en la memoria.',
    ],
  },
] as const;

export const rescueCareRoute = [
  'Detectar',
  'Acercarse con paciencia',
  'Capturar si hay urgencia',
  'Veterinaria',
  'Amanzar',
  'Castracion / adopcion',
] as const;

export const rescueShinyMoment = {
  title: 'SHINY MOMENT',
  text: 'No todos los rescates son epicos. A veces el shiny es simplemente ver a alguien que llego asustado dormir tranquilo por primera vez.',
} as const;

export const rescueHardPart = [
  'Lo mas dificil no es rescatar. Es aceptar que no puedo salvarlos a todos.',
  'Pero cuando veo un animal que necesita ayuda, me cuesta mucho mirar a otro lado. No porque quiera hacer algo heroico, sino porque si puedo ayudar, siento que debo hacerlo.',
] as const;

export const rescueSupportCopy = [
  'Actualmente la guild tiene 17 gatos y 2 perros. Algunos tienen condiciones cronicas o recurrentes, y entre comida, veterinaria, medicacion y castraciones, el mantenimiento del servidor sale caro.',
  'Si queres ayudar, cualquier apoyo suma: comida, medicacion, veterinaria o compartir casos cuando alguno busca hogar.',
  'No es obligatorio. Pero la guild lo agradece.',
] as const;
