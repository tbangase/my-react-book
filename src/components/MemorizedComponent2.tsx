import { memo, useState, useCallback } from 'react';

type ButtonProps = {
  onClick: () => void
}

const IncreaseButton = (props: ButtonProps) => {
  const {onClick} = props
  console.log('IncreaseButton rendered')
  return <button onClick={onClick}>Increase</button>
}

const DecreaseButton = (props: ButtonProps) => {
  const {onClick} = props
  console.log('DecreaseButton rendered')
  return <button onClick={onClick}>Decrease</button>
}

const DoubleButton = memo((props: ButtonProps) => {
  const {onClick} = props
  console.log('DoubleButton rendered')
  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((c) => c + 1);
  }
  const decrement = () => setCount(count - 1)

  const double = useCallback(() => setCount((c) => c * 2), [])

  console.log(`Parent rendered, count=${count}`)
  return (
    <div style={{ padding: '5px 20px'}}>
      <h1 style={{ padding: '5px 0px'}}>MemoizedComponent</h1>
      <p>{`Current count: ${count}`}</p>
      <IncreaseButton onClick={increment} />
      <DecreaseButton onClick={decrement} />
      <DoubleButton onClick={double} />
    </div>
  );
}

