import { Genre } from './genre';
import { ProductionCompany } from './productionCompany';
import { CountryCode } from './countryCode';

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: ProductionCompany[];
  production_countries: CountryCode[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: CountryCode[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const createDefaultMovieDetials = (): MovieDetails => ({
  adult: false,
  backdrop_path: '',
  budget: 0,
  genres: [],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: null,
  production_companies: [],
  production_countries: [],
  release_date: new Date(),
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
});