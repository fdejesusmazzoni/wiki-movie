import { genreAPI } from './genreApi';
import { isArray } from 'util';

test('when getGenres is called, return an array element', () => {
  genreAPI.getGenres().then((data) => {
    expect(isArray(data)).toEqual(true);
  }); 
});