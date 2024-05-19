import Orders from '../models/ordersModel.js';

class OrderServ {
    myCache;
    constructor() {
        this.config = process.env;
    }

    async getMyOrders(params) {
        let c;
        if(params.role == "owner"){
             c = await Orders.find({store_id: params.username}).lean();

        }
        else if(params.role == "customer"){
            c = await Orders.find({customer_id: params.username}).lean();
            
        }
        return c;
    }

    async placeNewOrder(params) {
        console.log("🚀 ~ file: orderServ.js:24 ~ params.role:", params.role)
        if(params.role == "customer"){
            const user = await Orders.findOne({ _id: params.order_id });
            if (user) return { message: 'Order already exists' };
            params._id = params.order_id;
    
            let c = await Orders.create(params);
            return { message: "Order Placed Successfully" };
        } else {
            return { message: "Cannot place orders" }; 
        }
    }
}

export default new OrderServ();