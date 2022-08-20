import { useState } from 'react';

type CounterProps = {
  initialCount: number
}

const Counter = (props: CounterProps) => {
  const {initialCount} = props;

  const [count, setCount] = useState(initialCount);

  let increment = () => {
    setCount(count + 1)
  }
  let decrement = () => {
    setCount(count - 1)
  }

  return (
    <div style={{ padding: '15px' }}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button style={{ padding: '5px'}} onClick={increment}>+</button>
      <button style={{ padding: '5px', margin: '5px'}} onClick={decrement}>-</button>
    </div>
  )
}


export default Counter 
