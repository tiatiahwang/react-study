import { atom } from 'recoil';

export const counterState = atom({
  key: 'counter',
  default: {
    value: 25 * 60,
    running: false,
  },
});

export const statsState = atom({
  key: 'stats',
  default: {
    round: 0,
    goal: 0,
  },
});
