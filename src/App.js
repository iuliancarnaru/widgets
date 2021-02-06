import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Yellow',
    value: 'yellow',
  },
];

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          labelText="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
