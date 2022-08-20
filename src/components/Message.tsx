
const Text = (props: {content: string}) => {
  const {content} = props;
  return <p className="text">{content}</p>;
}


const Message = () => {
  const content1 = 'This is parent component';
  const content2 = 'Message uses Text component';
  const content3 = 'Message uses Text component';
  const content4 = 'Message uses Text component';

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
      <Text content={content3} />
      <Text content={content4} />
    </div>
  );
}

export default Message
