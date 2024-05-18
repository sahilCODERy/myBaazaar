import Router from "koa-router";
import StoreServ from "../services/storeServ.js";

const storeRouter = new Router();

storeRouter.get('/getStores', async ctx => {
    try {
        let c = await StoreServ.getAllStores();
        ctx.body = c
    } catch (error) {
        throw error        
    }
});

storeRouter.post('/addStores', async ctx => {
    let c = await StoreServ.addStores();
    ctx.body = c
});


export default storeRouter;