import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    _id: String,
    order_name: String,
    store_id: String
})
export default mongoose.model("Orders", orderSchema);