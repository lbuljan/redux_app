import { SomethingList } from 'modules/something/components';
import { AddSomething } from 'modules/something/components/AddSomething';
import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <AddSomething />
      <h3>Here's what you added so far</h3>
      <SomethingList />
    </>
  );
};
