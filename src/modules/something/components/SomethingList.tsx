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

  function onEdit(e: React.FocusEvent<HTMLParagraphElement>) {
    const { id } = e.currentTarget.dataset;
    const { textContent } = e.currentTarget;
    if (!id || !textContent || !Boolean(textContent)) {
      return;
    }

    dispatch(SomeActions.edit({ id: parseInt(id), title: textContent }));
  }

  if (!items.length) {
    return <p>... nothing</p>;
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <span
            style={{ marginRight: 20 }}
            data-id={item.id}
            contentEditable
            onBlur={onEdit}
          >
            {item.title}
          </span>
          <button
            style={{ display: 'inline' }}
            onClick={onRemove}
            data-id={item.id}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};
