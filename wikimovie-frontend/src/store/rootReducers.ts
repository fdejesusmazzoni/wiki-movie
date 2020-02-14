
import { combineReducers } from 'redux';
import { ReduxState } from './reduxState';
import { 
  genresReducer, 
  moviesReducer, 
} from '../modules/reducers';

export const rootReducers = combineReducers<ReduxState>({
  genres: genresReducer,
  movies: moviesReducer
});