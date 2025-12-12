import Dexie from "dexie";

export const db = new Dexie("anyPolls");
db.version(1).stores({
  polls: "id, createdAt, answers, endTimestamp",
});
