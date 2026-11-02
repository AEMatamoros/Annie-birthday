/**
 * Single source of truth for everything shown on the invitation.
 * Edit here; components only render these values.
 */
export const invitation = {
  name: 'Annie Rebecca Midence',
  shortName: 'Annie',
  age: 7,
  birthdayLabel: '3 de noviembre',
  celebration: {
    dateLabel: 'Sábado 7 de noviembre',
    timeLabel: '12:00 PM',
    /** Local time of the party; drives the countdown. */
    startsAt: '2026-11-07T12:00:00',
    place: 'Casa de mi abuelita',
  },
} as const;
