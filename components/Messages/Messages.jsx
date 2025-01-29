export default ({ messages }) => {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message._id}>{message.text}</li>
      ))}
    </ul>
  );
};
