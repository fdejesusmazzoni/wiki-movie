export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
} 

export const createDefaultMovie = (): Movie => ({
  poster_path: '',
  adult: false,
  overview: '',
  release_date: new Date(),
  genre_ids: [],
  id: 0,
  original_title: '',
  original_language: '',
  title: '',
  backdrop_path: '',
  popularity: 0,
  vote_count: 0,
  video: false,
  vote_average: 0,
});

export const createDefaultMovies = (): Movie[] => ([]);