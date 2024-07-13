import { getMessages } from "@services/messages";

export default async ({ children }) => {
  // const response = await fetch("http://localhost:8080/messages", {
  // headers: {
  //   "X-ID": "layout",
  // },
  // cache: "no-store",
  // next: {
  //   revalidate: 5,
  // },
  // });

  // const messages = await response.json();

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
