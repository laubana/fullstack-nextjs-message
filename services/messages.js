import sql from "better-sqlite3";
// TODO
// 189
// import { cache as nextCache } from "next/cache";
// 188
// import { cache as reactCache } from "react";

const db = new sql("data.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

// TODO
// 189
// export const getMessages = nextCache(
// 188
// reactCache(() => {
export async function getMessages() {
  console.log("Fetching messages from db");
  return db.prepare("SELECT * FROM messages").all();
}
//   }),
//   ["Messages"],
//   { revalidate: 5, tags: ["Messages"] }
// );
