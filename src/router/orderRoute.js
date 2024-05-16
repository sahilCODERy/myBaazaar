import Router from "koa-router";
import StoresServ from "../services/storeServ";

const storesRouter = new Router();

storesRouter.get('/getStores', async ctx => {
    let c = await StoresServ.getAllStores();
    ctx.body = c
});

storesRouter.post('/addStores', async ctx => {
    let c = await StoresServ.addStores();
    ctx.body = c
});


export default new storesRouter;