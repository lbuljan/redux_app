import { ActionUnion } from '../../redux-store';
import { SomeItem } from '../models';
import { SomeActions } from './actions';

interface State {
  items: SomeItem[];
}

const INITIAL_STATE: State = {
  items: [],
};

export const SomeReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof SomeActions>,
) => {
  switch (action.type) {
    case 'sometype/add':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'sometype/edit':
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };

    case 'sometype/remove':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
