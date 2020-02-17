import {
  mapReturnLoadGenresToModel,
  mapMovieToModel,
  mapGenreToModel,
  mapProductionCompanyToModel,
  mapCountryCodeToModel,
  mapMovieDetialsToModel,
} from './mappers';
import { isArray } from 'util';
import * as api from '../model';

test('when mapReturnLoadGenresToModel is called with a ReturnLoadGenres, return an array element', () => {
  const entity: api.ReturnLoadGenres = {
    genres: [{
      id: 1,
      name: 'test'
    }]
  };

  const mapperedObject = mapReturnLoadGenresToModel(entity);

  expect(isArray(mapperedObject)).toEqual(true);
  expect(mapperedObject.length).toEqual(1);
  expect(mapperedObject[0].id).toEqual(entity.genres[0].id);
  expect(mapperedObject[0].name).toEqual(entity.genres[0].name);
});

test('when mapMovieToModel is called with a movie, return a movie', () => {
  const entity: api.MoviesPaginator = api.createDefaultMoviesPaginator();

  const mapperedObject = mapMovieToModel(entity);

  expect(mapperedObject).toBeDefined();
  expect(isArray(mapperedObject.results)).toEqual(true);
});

test('when mapGenreToModel is called with a Genre, return a Genre', () => {
  const entity: api.Genre = api.createDefaultGenre();

  const mapperedObject = mapGenreToModel(entity);

  expect(mapperedObject).toBeDefined();
  expect(mapperedObject.id).toEqual(entity.id);
  expect(mapperedObject.name).toEqual(entity.name);
});

test('when mapProductionCompanyToModel is called with a ProductionCompany, return a ProductionCompany', () => {
  const entity: api.ProductionCompany = api.createDefaultProductionCompany();

  const mapperedObject = mapProductionCompanyToModel(entity);

  expect(mapperedObject).toBeDefined();
  expect(mapperedObject.id).toEqual(entity.id);
  expect(mapperedObject.name).toEqual(entity.name);
  expect(mapperedObject.logo_path).toEqual(entity.logo_path);
  expect(mapperedObject.origin_country).toEqual(entity.origin_country);
});

test('when mapCountryCodeToModel is called with a CountryCode, return a CountryCode', () => {
  const entity: api.CountryCode = api.CreateDefaultCountryCode();

  const mapperedObject = mapCountryCodeToModel(entity);

  expect(mapperedObject).toBeDefined();
  expect(mapperedObject.iso_3166_1).toEqual(entity.iso_3166_1);
  expect(mapperedObject.name).toEqual(entity.name);
});

test('when mapMovieDetialsToModel is called with a MovieDetails, return a MovieDetails', () => {
  const entity: api.MovieDetails = api.createDefaultMovieDetials();

  const mapperedObject = mapMovieDetialsToModel(entity);

  expect(mapperedObject).toBeDefined();
  expect(mapperedObject.adult).toEqual(mapperedObject.adult);
  expect(mapperedObject.backdrop_path).toEqual(mapperedObject.backdrop_path);
  expect(mapperedObject.budget).toEqual(mapperedObject.budget);
  expect(mapperedObject.genres).toEqual(mapperedObject.genres);
  expect(mapperedObject.homepage).toEqual(mapperedObject.homepage);
  expect(mapperedObject.id).toEqual(mapperedObject.id);
  expect(mapperedObject.imdb_id).toEqual(mapperedObject.imdb_id);
  expect(mapperedObject.original_language).toEqual(mapperedObject.original_language);
  expect(mapperedObject.original_title).toEqual(mapperedObject.original_title);
  expect(mapperedObject.overview).toEqual(mapperedObject.overview);
  expect(mapperedObject.popularity).toEqual(mapperedObject.popularity);
  expect(mapperedObject.poster_path).toEqual(mapperedObject.poster_path);
  expect(mapperedObject.production_companies).toEqual(mapperedObject.production_companies);
  expect(mapperedObject.production_countries).toEqual(mapperedObject.production_countries);
  expect(mapperedObject.release_date).toEqual(mapperedObject.release_date);
  expect(mapperedObject.revenue).toEqual(mapperedObject.revenue);
  expect(mapperedObject.runtime).toEqual(mapperedObject.runtime);
  expect(mapperedObject.spoken_languages).toEqual(mapperedObject.spoken_languages);
  expect(mapperedObject.status).toEqual(mapperedObject.status);
  expect(mapperedObject.tagline).toEqual(mapperedObject.tagline);
  expect(mapperedObject.title).toEqual(mapperedObject.title);
  expect(mapperedObject.video).toEqual(mapperedObject.video);
  expect(mapperedObject.vote_average).toEqual(mapperedObject.vote_average);
  expect(mapperedObject.vote_count).toEqual(mapperedObject.vote_count);
});