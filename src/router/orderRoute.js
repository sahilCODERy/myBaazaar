import Router from "koa-router";
import OrderServ from "../services/orderServ.js";

const OrderRoute = new Router();

OrderRoute.get('/getOrders', async ctx => {
    let c = await OrderServ.getAllStores();
    ctx.body = c
});

OrderRoute.post('/placeNewOrder', async ctx => {
    let c = await OrderServ.addStores();
    ctx.body = c
});


export default OrderRoute;