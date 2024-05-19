import Router from "koa-router";
import OrderServ from "../services/orderServ.js";
import JWT from "../utils/jwt.js";

const OrderRoute = new Router();

OrderRoute.get('/getMyOrders', JWT.authenticateJWT, async ctx => {
    let c = await OrderServ.getMyOrders(ctx.request.body);
    ctx.body = c
});

OrderRoute.post('/placeNewOrder', JWT.authenticateJWT, async ctx => {
    let c = await OrderServ.placeNewOrder(ctx.request.body);
    ctx.body = c
});


export default OrderRoute;