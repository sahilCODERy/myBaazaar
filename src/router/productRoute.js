import Router from "koa-router";
import productServ from "../services/productServ.js";

const productRouter = new Router();

productRouter.get('/getProducts', async (ctx, next) => {
        let c = await productServ.getAllProducts();
        ctx.body = c;
    
});

productRouter.post('/addProducts', async (ctx, next) => {
        let c = await productServ.addProducts(ctx.request.body);
        ctx.body = c;
    
});


export default productRouter;