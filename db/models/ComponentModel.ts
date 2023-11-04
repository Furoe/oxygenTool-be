import { Schema, model, Types } from "mongoose";

let ComponentSchema = new Schema({
  name: String,
  version: String,
  type: String,
  url: String,
});

let ComponentModel = model("component", ComponentSchema);

export default ComponentModel;
