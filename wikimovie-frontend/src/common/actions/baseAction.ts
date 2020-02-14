import { Action } from 'redux';

// tslint:disable-next-line:no-any
export interface BaseAction<T = any> extends Action {
  type: string;
  payload: T;
}
