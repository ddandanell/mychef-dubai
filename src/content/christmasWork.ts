/**
 * Real photographs from a previous Christmas sitting, shown on
 * /christmas-catering-dubai. Not concept art — do not add
 * "Experience concept shown".
 */

export const CHRISTMAS_WORK = {
  label: 'Previous work',
  h2: 'A Christmas table we already set',
  intro:
    'These three photographs are from a villa dinner we ran. You are looking at the table: crackers, gold cutlery, a fir runner. Table setup and styling is a line you add when the room needs it, not part of every booking.',
  note: 'Every photograph here is from a previous myCHEF Christmas sitting.',
} as const

export const CHRISTMAS_WORK_PHOTOS = [
  {
    src: '/images/christmas-work/christmas-villa-dining-room.webp',
    alt: 'Long villa dining table set for Christmas dinner, from a previous myCHEF sitting.',
    caption: 'The dining room, dressed before guests sat down.',
    width: 1600,
    height: 1067,
    featured: true,
  },
  {
    src: '/images/christmas-work/christmas-villa-centerpiece.webp',
    alt: 'Fir, nutcrackers and red velvet swans down the centre of a dressed Christmas table, from a previous myCHEF sitting.',
    caption: 'The runner down the middle of the table.',
    width: 1600,
    height: 1067,
    featured: false,
  },
  {
    src: '/images/christmas-work/christmas-villa-place-settings.webp',
    alt: 'Two Christmas place settings with crackers, burgundy napkins and gold cutlery, from a previous myCHEF sitting.',
    caption: 'A place setting, close in.',
    width: 1600,
    height: 1067,
    featured: false,
  },
] as const
