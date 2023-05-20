import mongoose from "mongoose";
import { DB_CONFIG } from "@db/config/config";

export function connectDB(success: () => void, error: () => void) {
  const { host, port, database } = DB_CONFIG;

  mongoose.connect(`mongodb://${host}:${port}/${database}`);

  let db = mongoose.connection;
  db.on("open", () => {
    console.log("数据库连上了");
    success();
  });

  db.on("error", (err) => {
    console.error("数据库连接失败", err);
    error();
  });
}
