import { atom, selector } from 'recoil';

export enum Categories {
  'WISH' = 'WISH',
  'BEEN' = 'BEEN',
  'LIKE' = 'LIKE',
}

export interface INations {
  id: number;
  name: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.WISH,
});

export const NationsState = atom<INations[]>({
  key: 'nation',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const StorageKey = 'nation';
      const savedValue = localStorage.getItem(StorageKey);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) =>
        isReset
          ? localStorage.removeItem(StorageKey)
          : localStorage.setItem(
              StorageKey,
              JSON.stringify(newValue),
            ),
      );
    },
  ],
});

export const NationSelector = selector({
  key: 'nationSelector',
  get: ({ get }) => {
    const nations = get(NationsState);
    return [
      nations.filter(
        (nation) => nation.category === 'WISH',
      ),
      nations.filter(
        (nation) => nation.category === 'BEEN',
      ),
      nations.filter(
        (nation) => nation.category === 'LIKE',
      ),
    ];
  },
});
