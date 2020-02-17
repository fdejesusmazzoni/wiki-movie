import { getBackdropUrlImage, getPosterUrlImage, getCompanyUrlImage } from './imageMovie';
import { Movie, createDefaultMovie, ProductionCompany } from '../../../model';
import noimage from '../../../content/no-image.png';
import { BASE_IMAGE_URL, IMAGE_MEDIUM_SIZE, IMAGE_SMALL_SIZE } from './constants';
import { createDefaultProductionCompany } from '../../../api/model';

test('when getBackdropUrlImage is called with a movie that has not backdrop, return no-image', () => {
  const movie: Movie = createDefaultMovie();
  movie.backdrop_path = '';
  const url = getBackdropUrlImage(movie);

  expect(url).toEqual(noimage);
});

test('when getBackdropUrlImage is called with a movie that has backdrop, return url complete', () => {
  const movie: Movie = createDefaultMovie();
  const img = 'test.jpg';
  movie.backdrop_path = img;
  const url = getBackdropUrlImage(movie);

  expect(url).toEqual(`${BASE_IMAGE_URL}${IMAGE_MEDIUM_SIZE}/${img}`);
});

test('when getPosterUrlImage is called with a movie that has not poster, return no-image', () => {
  const movie: Movie = createDefaultMovie();
  movie.poster_path = '';
  const url = getPosterUrlImage(movie);

  expect(url).toEqual(noimage);
});

test('when getPosterUrlImage is called with a movie that has poster, return url complete', () => {
  const movie: Movie = createDefaultMovie();
  const img = 'test.jpg';
  movie.poster_path = img;
  const url = getPosterUrlImage(movie);

  expect(url).toEqual(`${BASE_IMAGE_URL}${IMAGE_MEDIUM_SIZE}/${img}`);
});

test('when getCompanyUrlImage is called with a company that has not logo, return no-image', () => {
  const company: ProductionCompany = createDefaultProductionCompany();
  company.logo_path = '';
  const url = getCompanyUrlImage(company);

  expect(url).toEqual(noimage);
});

test('when getCompanyUrlImage is called with a company that has logo, return url complete', () => {
  const company: ProductionCompany = createDefaultProductionCompany();
  const img = 'test.jpg';
  company.logo_path = img;
  const url = getCompanyUrlImage(company);

  expect(url).toEqual(`${BASE_IMAGE_URL}${IMAGE_SMALL_SIZE}/${img}`);
});