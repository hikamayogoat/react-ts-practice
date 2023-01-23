import React, { useCallback, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, []);

  return (
    <div className="App">
      <div>{ count }</div>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </div>
  );
}

export default App;
