import {type} from 'os';
import React, { memo, useState } from 'react';

type FizzProps = {
  isFizz: boolean
}

const Fizz = memo((props: FizzProps) => {
  const {isFizz} = props
  console.log('Fizz rendered')
  return <span>{isFizz ? 'Fizz' : ''}</span>
})

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props: BuzzProps) => {
  const {isBuzz, onClick} = props
  console.log('Buzz rendered')
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;
  const onBuzzClick = () => {
    console.log('Buzz clicked')
  }

  console.log(`Parent rendered, count=${count}`);
  return (
    <div style={{ padding: '5px 20px'}}>
      <h1 style={{ padding: '5px 0px'}}>MemoizedComponent</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{`Current count: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
      </p>
    </div>
  );
}

