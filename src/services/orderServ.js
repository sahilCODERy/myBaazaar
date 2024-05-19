import Orders from '../models/ordersModel.js';

class OrderServ {
    myCache;
    constructor() {
        this.config = process.env;
    }

    async getAllOrders() {
            let c = await Orders.find();
            return c;
    }

    async placeNewOrder(){
        
    }
}

export default new OrderServ();