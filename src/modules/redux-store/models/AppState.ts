import { SomeReducer } from '../../something/redux';

export interface AppState {
  something: ReturnType<typeof SomeReducer>;
}
