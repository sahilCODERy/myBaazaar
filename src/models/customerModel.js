import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    _id: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    customer_name: {type: String, required: true},
    role: {type: String, enum:["owner", "customer", "master"]},
    store_id: String
})
export default mongoose.model("Customers", customerSchema);