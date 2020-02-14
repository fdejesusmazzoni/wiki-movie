import { all, fork, takeEvery } from 'redux-saga/effects';
import { isDevelopmentMode } from '../../common/util/isDevMode';

function* watchAll() {
  yield takeEvery('*', function logger(action: Object) {
    // tslint:disable-next-line:no-console
    console.log(action);
    return null;
  });
}

function getForks() {
  const forks = [
  ];
  
  if (isDevelopmentMode()) {
    forks.push(fork(watchAll));
  }
  
  return forks;
}

export default function* rootSaga() {
  yield all(getForks());
}