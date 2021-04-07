import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SomeReducer } from '../../something/redux';
import { AppState } from '../models';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({ something: SomeReducer }),
    {},
    composeWithDevTools(),
  );
};
