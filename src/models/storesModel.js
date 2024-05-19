import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    _id: String,
    store_name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    role: {type: String, enum:["owner", "customer", "master"]}
})
export default mongoose.model("Stores", storeSchema);