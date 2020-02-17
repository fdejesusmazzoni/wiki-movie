import { Movie } from './movie';

export interface MoviesPaginator {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export const createDefaultMoviesPaginator = (): MoviesPaginator => ({
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
});