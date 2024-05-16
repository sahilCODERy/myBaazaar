import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: String,
    product_name: String,
    store_id: String
})
export default mongoose.model("Products", productSchema);