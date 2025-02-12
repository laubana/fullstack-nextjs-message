import { getMessages } from "@services/message";

export default async ({ children }) => {
  const messages = await getMessages();

  return (
    <>
      <h1>Important Messages</h1>
      <p>{messages.length} messages found</p>
      <hr />
      {children}
    </>
  );
};
