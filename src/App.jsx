import { useState } from 'react';
import './index.scss'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    setCounter(counter - 1);

  };

   console.log("App");
  return (
    <div className='flex justify-center items-center p-52'>
      <button onClick={decreaseHandler} className='rounded-full bg-indigo-500 px-3'>-</button>
      <h2 className='mx-2'>{counter}</h2>
      <button onClick={increaseHandler} className='rounded-full bg-indigo-500 px-3'>+</button>
    </div>
  );
}

export default App;
