import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    _id: String,
    customer_name: String,
    store_id: String
})
export default mongoose.model("Customers", customerSchema);