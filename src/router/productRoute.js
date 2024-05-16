import Router from "koa-router";
import productServ from "../services/productServ.js";

const productRouter = new Router();

productRouter.get('/getProducts', async (ctx, next) => {
    try {
        let c = await productServ.getAllProducts();
        ctx.body = c
    } catch (error) {
        console.log("🚀 ~ file: productRoute.js:11 ~ error:", error)
        throw error
    }
    
});

productRouter.post('/addProducts', async (ctx, next) => {
    try {
        let c = await productServ.addProducts();
        ctx.body = c
    } catch (error) {
        throw error
    }
    
});


export default productRouter;