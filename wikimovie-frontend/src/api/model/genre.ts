export interface Genre {
  id: number;
  name: string;
}

export interface ReturnLoadGenres {
  genres: Genre[];
}

export const createDefaultGenres = (): Genre[] => ([]);

export const createDefaultGenre = (): Genre => ({
  id: 0,
  name: '',
});