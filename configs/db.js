import mongoose from "mongoose";

import "@models/Message";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log(error);

    console.error("Failed to connect to DB 🚨");
  }
};
