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
      <h3>Here's what you have added so far...</h3>
      {items
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <strong>{item.id}.</strong>
            <span
              style={{ flex: 1, marginRight: 20, marginLeft: 20 }}
              data-id={item.id}
              contentEditable
              onBlur={onEdit}
            >
              {item.title}
            </span>
            <button onClick={onRemove} data-id={item.id}>
              &times;
            </button>
          </div>
        ))}
    </>
  );
};
