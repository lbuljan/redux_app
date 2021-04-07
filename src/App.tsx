import { SomethingList } from 'modules/something/components';
import { AddSomething } from 'modules/something/components/AddSomething';
import React from 'react';

export const App: React.FC = () => {
  return (
    <section style={{ padding: '5%', paddingBottom: 0, maxWidth: 1800 }}>
      <AddSomething />
      <SomethingList />
    </section>
  );
};
