import { movieAPI } from './movieApi';
import { isArray } from 'util';
import { MovieDetails } from '../../model';

test('when getPopularMovies is called with a valid page, return an array element', () => {
  movieAPI.getPopularMovies(1).then((data) => {
    expect(isArray(data)).toEqual(true);
  }); 
});

test('when getPopularMovies is called with a invalid page, return an empty array', () => {
  movieAPI.getPopularMovies(-1).then((data) => {
    expect(isArray(data)).toEqual(true);
    expect(data.results.length).toEqual(0);
  }); 
});

test('when getSearchMovies is called with a valid page and filter, return an array element', () => {
  movieAPI.getSearchMovies({page: 1, searchTitle: ''}).then((data) => {
    expect(isArray(data)).toEqual(true);
  }); 
});

test('when getSearchMovies is called with a invalid filter, return an empty array', () => {
  movieAPI.getSearchMovies({page: 1, searchTitle: '??????????'}).then((data) => {
    expect(isArray(data)).toEqual(true);
    expect(data.results.length).toEqual(0);
  }); 
});

test('when getMovieDetails is called with a valid id, return a movie', () => {
  movieAPI.getMovieDetails(200).then((data: MovieDetails) => {
    expect(data.title).toEqual(true);
  }); 
});

test('when getMovieDetails is called with a invalid id, return error', () => {
  movieAPI.getMovieDetails(-1).then((data) => {
    expect(isArray(data)).toEqual(true);
    expect(data).toEqual(null);
  }); 
});