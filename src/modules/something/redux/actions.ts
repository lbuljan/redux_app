import { createAction } from '../../redux-store';
import { SomeItem } from '../models';

export const SomeActions = {
  add: (item: SomeItem) => createAction('sometype/add', item),
  edit: (item: SomeItem) => createAction('sometype/edit', item),
  remove: (id: number) => createAction('sometype/remove', { id }),
};
