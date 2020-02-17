import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './rootReducers';
import rootSaga from '../modules/sagas';

// tslint:disable-next-line:no-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

export const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(rootSaga);