import { put, call } from 'redux-saga/effects';
import { movieAPI } from '../../api/rest/movieApi';
import { MoviesPaginator, FilterMovie } from '../../model';
import { searchMoviesSuccessAction, searchMoviesErrorAction } from '../actions';
import i18n from '../../i18n';
import { toast } from 'react-toastify';
import { BaseAction } from '../../common/actions/baseAction';

export function* searchMoviesSaga(action: BaseAction<FilterMovie>) {
  try {
    const movies: MoviesPaginator = yield call(movieAPI.getSearchMovies, action.payload);
    
    yield put(searchMoviesSuccessAction(movies));
  } catch (error) {
    const errorMsg = i18n.t(error);
    yield put(searchMoviesErrorAction(errorMsg));
    toast.error(errorMsg);
  }
}