import React from 'react';
import './App.css';
import { Child1, Child2 } from './components/Child';

type Item = {
  id: number,
  title: string,
};

const items: Item[] = [
  {
    id: 1,
    title: "商品1"
  },
  {
    id: 2,
    title: "商品2"
  }
];

type Props = {
  number: string
  children: React.ReactNode
}


const App: React.FC = () => {
  return (
    <div className="App">
      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;
