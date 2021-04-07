import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SomeReducer } from '../../something/redux';
import { AppState } from '../models';

export const configureStore = () => {
  const RootReducer = {
    something: SomeReducer,
  };

  return createStore(
    combineReducers<AppState>(RootReducer),
    {},
    composeWithDevTools(),
  );
};
