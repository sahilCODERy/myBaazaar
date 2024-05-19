import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    _id: String,
    status: { type: String, required: true, enum: ["placed"] },
    product_id: { type: String, required: true },
    store_id: { type: String, required: true },
    customer_id: { type: String, required: true }
})
export default mongoose.model("Orders", orderSchema);