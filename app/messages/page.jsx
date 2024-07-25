import Messages from "@components/Messages/Messages";
import { getMessages } from "@services/messages";

// export const revalidate = 5;

export default async () => {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  // headers: {
  //   "X-ID": "page",
  // },
  // cache: "no-store",
  // next: {
  //   revalidate: 0,
  //   tags: ["Messages"],
  // },
  // });

  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};
