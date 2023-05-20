import { ResultData } from "@t/index.d";
import express from "express";
import UserModel from "@db/models/UserModel";
import jwt from "jsonwebtoken";

const authKey: string = "diDfnLsCd";

const authRouter = express.Router();

authRouter.post("/login", express.json(), async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    if (password === user.password) {
      const token = jwt.sign({ data: password }, authKey, { expiresIn: "24h" });
      res
        .status(200)
        .json({ success: true, message: "登录成功", data: { token } });
    } else {
      const resultData: ResultData = {
        success: false,
        message: "用户名或密码错误",
      };
      res.status(400).send(resultData);
    }
  } else {
    const resultData: ResultData = {
      success: false,
      message: "用户不存在",
    };
    res.status(400).send(resultData);
  }
});

export default authRouter;
