interface BaseCharacter {
  id: number;
  name: string;
  imageUrl: string;
}

export type DetailCharacter = BaseCharacter & {
  films: string[];
  sourceUrl: string;
};

export type CharactersResponse = BaseCharacter[];
