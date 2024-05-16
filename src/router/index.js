import storeRouter from "./storeRoute.js";
import productRoute from "./productRoute.js";

class routeIndex{
    constructor(app){
        app.use(storeRouter.routes());
        app.use(productRoute.routes());
    }
}

export default routeIndex;