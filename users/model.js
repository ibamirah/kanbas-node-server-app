import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("users", schema);
export const findAllUsers = () => model.find();
export default model;