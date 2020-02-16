
import { combineReducers } from 'redux';
import { ReduxState } from './reduxState';
import { 
  genresReducer, 
  moviesReducer, 
  movieDetailsReducer,
} from '../modules/reducers';

export const rootReducers = combineReducers<ReduxState>({
  genres: genresReducer,
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});