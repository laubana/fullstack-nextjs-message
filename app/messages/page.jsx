import Messages from "@components/Messages/Messages";
import { getMessages } from "@services/messages";

export default async () => {
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};
