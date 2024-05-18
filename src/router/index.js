import Router from "koa-router";
import storeRouter from "./storeRoute.js";
import productRoute from "./productRoute.js";
import authRouter from "./authRoute.js";

class routeIndex{
    constructor(app){

        this.groupRoutes()
        app.use(this.router.routes());
    }
    
    groupRoutes(){
        this.router = new Router();
        this.router.use('/stores',storeRouter.routes());
        this.router.use('/products',productRoute.routes());
        this.router.use('/auth',authRouter.routes());
        this.router.allowedMethods({
            methods: ['GET', 'POST']
        })
    }
}

export default routeIndex;