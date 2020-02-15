import { takeLatest, all, fork, takeEvery } from 'redux-saga/effects';
import { isDevelopmentMode } from '../../common/util/isDevMode';
import { commonActionTypes } from '../constants';
import { loadGenresSaga } from './loadGenresSaga';
import { loadPopularMoviesSaga } from './loadPopularMoviesSaga';

function* watchAll() {
  yield takeEvery('*', function logger(action: Object) {
    // tslint:disable-next-line:no-console
    console.log(action);
    return null;
  });
}

function* watchLoadGenresSaga() {
  yield takeLatest(commonActionTypes.LOAD_GENRES_REQUEST, loadGenresSaga);
}

function* watchLoadPopularMoviesSaga() {
  yield takeLatest(commonActionTypes.LOAD_POPULAR_MOVIES_REQUEST, loadPopularMoviesSaga);
}

function getForks() {
  const forks = [
    fork(watchLoadGenresSaga),
    fork(watchLoadPopularMoviesSaga),
  ];
  
  if (isDevelopmentMode()) {
    forks.push(fork(watchAll));
  }
  
  return forks;
}

export default function* rootSaga() {
  yield all(getForks());
}