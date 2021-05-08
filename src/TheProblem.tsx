import React, { useState } from 'react';

export const TheProblem: React.FC = () => {
  const [state, setState] = useState('');
  return (
    <section style={{ padding: '5%', paddingBottom: 0, maxWidth: 1800 }}>
      <ParentOne state={state} setState={setState} />
    </section>
  );
};

const ParentOne: React.FC<{
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  return (
    <>
      <p>Nešto sedmo</p>
      <ParentTwo {...props} />
    </>
  );
};

const ParentTwo: React.FC<{
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}> = ({ state, setState }) => {
  return (
    <>
      <ReadComponent state={state} />
      <WriteComponent setState={setState} />
    </>
  );
};

const ReadComponent: React.FC<{
  state: string;
}> = ({ state }) => {
  return <p>{state}</p>;
};

const WriteComponent: React.FC<{
  setState: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setState }) => {
  return <button onClick={() => setState('nešto')} />;
};
