import React from 'react';
import './App.css';
import { PrevProps } from './components/PrevProps';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <div>
        <PrevProps count={count} />
      </div>
    </div>
  );
}

export default App;
