export default ({ messages }) => {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};
