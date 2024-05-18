import mongoose from "mongoose";

const adminschema = new mongoose.Schema({
    username: String,
    password: String,
    role: String
})
export default mongoose.model("Admins", adminschema);