import { AppState } from 'modules/redux-store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SomeActions } from '../redux';

export const AddSomething: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: AppState) => state.something);
  const [title, setTitle] = useState('');
  const id = items.length
    ? items.sort((a, b) => a.id - b.id)[items.length - 1].id + 1
    : 1;
  const isValid = Boolean(title);

  function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (!isValid) {
      return;
    }

    dispatch(SomeActions.add({ id, title }));
    setTitle('');
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setTitle(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>
        <label htmlFor="title">What are you adding?</label>
      </h3>
      <div style={{ marginTop: 10, marginBottom: 20, display: 'flex' }}>
        <input
          id="title"
          name="title"
          placeholder="Type something in..."
          type="text"
          style={{ flex: 1, maxWidth: 500 }}
          value={title}
          onChange={onChange}
        />
        <button type="submit" style={{ marginLeft: 20 }} disabled={!isValid}>
          Add
        </button>
      </div>
    </form>
  );
};
