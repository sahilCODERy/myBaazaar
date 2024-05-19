import Router from "koa-router";
import StoreServ from "../services/storeServ.js";
import JWT from "../utils/jwt.js";
const storeRouter = new Router();

storeRouter.post('/login', async ctx => {
    let c = await StoreServ.login(ctx.request.body);
    ctx.body = c
});

storeRouter.post('/signup', async ctx => {
    let c = await StoreServ.signup(ctx.request.body);
    ctx.body = c
});


storeRouter.get('/getAllStores', JWT.authenticateJWT, JWT.authorize, async ctx => {
    let c = await StoreServ.getAllStores();
    ctx.body = c
});

storeRouter.post('/addStores', async ctx => {
    let c = await StoreServ.addStores();
    ctx.body = c
});

storeRouter.get('/getMyStore', JWT.authenticateJWT, async ctx => {
    let c = await StoreServ.getMyStore(ctx.request.body);
    ctx.body = c
});

export default storeRouter;