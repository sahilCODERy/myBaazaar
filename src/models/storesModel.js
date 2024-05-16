import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    _id: String,
    store_name: String,
    address: String
})
export default mongoose.model("Stores", storeSchema);