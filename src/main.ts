import express from "express";
import authRouter from "@/routes/auth";
import { connectDB } from "@db/index";

const appInit = (): void => {
  const app = express();

  const port = 3000;

  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("X-Powered-By", " 3.2.1");
    if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
    else next();
  });

  app.use("/api/auth", authRouter);

  app.listen(port, () => {
    console.log("Serve is listening on 3000...");
  });
};

connectDB(appInit, () => {
  console.log("数据库连接失败");
});
