import {memo, useState, useMemo} from "react"

export const UseMemoSample = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState<string[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClick = () => {
    setItems((prevItems) => [...prevItems, text])
    setText("")
  }

  const numberOfCharacters1 = () => {
    console.log("numberOfCharacters1 called")
    return items.reduce((acc, item) => acc + item.length, 0)
  }

  const numberOfCharacters2 = useMemo(() => {
    console.log("numberOfCharacters2 called")
    return items.reduce((acc, item) => acc + item.length, 0)
  }, [items])

  return (
    <div>
      <h1>UseMemoSample</h1>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (<p key={index}>{item}</p>))}
      </div>
      <div>
        <p>{`Number of characters 1: ${numberOfCharacters1()}`}</p>
        <p>{`Number of characters 2: ${numberOfCharacters2}`}</p>
      </div>
    </div>
  )
}
