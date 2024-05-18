import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: String,
    product_name: String,
    category: String,
    price: Number,
    store_id: String
})
export default mongoose.model("Products", productSchema);