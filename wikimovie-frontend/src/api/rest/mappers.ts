import * as api from '../model';
import * as model from '../../model';

export const mapReturnLoadGenresToModel = (returnLoadGenres: api.ReturnLoadGenres): model.Genre[] => ([
  ...returnLoadGenres.genres,
]);

export const mapMovieToModel = (movies: api.MoviesPaginator): model.MoviesPaginator => ({
  page: movies.page,
  results: [...movies.results],
  total_pages: movies.total_pages,
  total_results: movies.total_results,
});

export const mapGenreToModel = (genre: api.Genre): model.Genre => ({
  id: genre.id,
  name: genre.name,
});

export const mapProductionCompanyToModel = (productionCompany: api.ProductionCompany): model.ProductionCompany => ({
  id: productionCompany.id,
  logo_path: productionCompany.logo_path,
  origin_country: productionCompany.origin_country,
  name: productionCompany.name,
});

export const mapCountryCodeToModel = (countryCode: api.CountryCode): model.CountryCode => ({
  iso_3166_1: countryCode.iso_3166_1,
  name: countryCode.name,
});

export const mapMovieDetialsToModel = (movieDetails: api.MovieDetails): model.MovieDetails => ({
  adult: movieDetails.adult,
  backdrop_path: movieDetails.backdrop_path,
  budget: movieDetails.budget,
  genres: movieDetails.genres.map(g => mapGenreToModel(g)),
  homepage: movieDetails.homepage,
  id: movieDetails.id,
  imdb_id: movieDetails.imdb_id,
  original_language: movieDetails.original_language,
  original_title: movieDetails.original_title,
  overview: movieDetails.overview,
  popularity: movieDetails.popularity,
  poster_path: movieDetails.poster_path,
  production_companies: movieDetails.production_companies.map(c => mapProductionCompanyToModel(c)),
  production_countries: movieDetails.production_countries.map(c => mapCountryCodeToModel(c)),
  release_date: movieDetails.release_date,
  revenue: movieDetails.revenue,
  runtime: movieDetails.runtime,
  spoken_languages: movieDetails.spoken_languages.map(c => mapCountryCodeToModel(c)),
  status: movieDetails.status,
  tagline: movieDetails.tagline,
  title: movieDetails.title,
  video: movieDetails.video,
  vote_average: movieDetails.vote_average,
  vote_count: movieDetails.vote_count,
});