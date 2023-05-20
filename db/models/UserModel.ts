import { Schema, model, Types } from "mongoose";

interface IUser {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

let UserSchema = new Schema<IUser>({
  username: String,
  password: String,
});

let UserModel = model<IUser>("user", UserSchema, "user");

export default UserModel;
