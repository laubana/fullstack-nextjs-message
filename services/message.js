import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";

import { connect } from "@configs/db";
import Message from "@models/Message";

export const addMessage = async (text) => {
  await connect();

  const newMessage = await Message.create({ text });

  return newMessage;
};

export const getMessages = nextCache(
  reactCache(async () => {
    await connect();

    const existingMessages = await Message.find().lean();

    return existingMessages;
  }),
  ["messages"],
  { tags: ["msg"] }
);
