import {type} from 'os';
import { useReducer } from 'react';

type Action = 'INCREMENT' | 'DECREMENT' | 'RESET' | 'DOUBLE'

const reducer = (current: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return current + 1;
    case 'DECREMENT':
      return current - 1;
    case 'RESET':
      return 0;
    case 'DOUBLE':
      return current * 2;
    default:
      throw new Error('Unhandled action');
  }
} 

type CounterProps = {
  initialCount: number
}

const Counter = (props: CounterProps) => {
  const {initialCount} = props;

  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div style={{ padding: '15px' }}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button style={{ padding: '5px'}} onClick={() => dispatch('INCREMENT')}>+</button>
      <button style={{ padding: '5px', margin: '5px'}} onClick={() => dispatch('DECREMENT')}>-</button>
      <button style={{ padding: '5px', margin: '5px'}} onClick={() => dispatch('DOUBLE')}>*2</button>
      <button style={{ padding: '5px', margin: '5px'}} onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}


export default Counter 
