import React from 'react';
import Accordion from './Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript library.',
  },
  {
    title: 'Why use React?',
    content: 'React is one of the best libraries.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating reusable components.',
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
