import React, {useImperativeHandle, useState, useRef} from "react"

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message ?? <p>{message}</p>}</div>
})

export const Parent = () => {
  const childRef = useRef<{showMessage: () => void}>(null)
  const onClick = () => {
    if (childRef.current) {
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <h1>UseImperativeSample</h1>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}
