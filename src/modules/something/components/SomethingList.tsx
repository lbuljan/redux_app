import { AppState } from 'modules/redux-store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SomeActions } from '../redux';

export const SomethingList: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: AppState) => state.something);

  function onRemove(e: React.MouseEvent<HTMLButtonElement>) {
    const { id } = e.currentTarget.dataset;

    if (id) {
      dispatch(SomeActions.remove(parseInt(id)));
    }
  }

  if (!items.length) {
    return <p>... nothing</p>;
  }

  return (
    <>
      {items.map((item) => (
        <span key={item.id}>
          <p>{item.title}</p>
          <button
            style={{ display: 'inline-block' }}
            onClick={onRemove}
            data-id={item.id}
          >
            Remove
          </button>
        </span>
      ))}
    </>
  );
};
