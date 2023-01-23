import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PROPERTY_TYPES } from '@babel/types';

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

const Child: React.FC<Props> = ({ number, children })=> {
  return (
    <p>{ number } の { children }</p>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Child number="1">子のコンポーネント1</Child>
      <Child number="2">子のコンポーネント2</Child>
    </div>
  );
}

export default App;
