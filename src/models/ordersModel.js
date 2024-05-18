import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    _id: String,
    order_name: String,
    status: String,
    store_id: String,
    customer_id: String
})
export default mongoose.model("Orders", orderSchema);