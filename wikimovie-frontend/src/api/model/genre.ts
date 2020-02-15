export interface Genre {
  id: number;
  name: string;
}

export interface ReturnLoadGenres {
  genres: Genre[];
}

export const createDefaultGenres = (): Genre[] => ([]);