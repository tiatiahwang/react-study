import { atom } from 'recoil';

export type IPomo = {
  isActive: boolean;
  remainSeconds: number;
};

const defaultPomo: IPomo = {
  isActive: false,
  remainSeconds: 1500,
};

export const pomoState = atom<IPomo>({
  key: 'pomo',
  default: defaultPomo,
});
