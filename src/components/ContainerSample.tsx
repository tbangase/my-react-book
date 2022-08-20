import React from "react";

type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return <div style={{background: 'red'}}>
    <span>{title}</span>
    <div>{children}</div>
  </div>
};

const Parent = () => {
  return <Container title="Hello">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </Container>
}

export default Parent;
