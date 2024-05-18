import Koa from 'koa';
import routeIndex from './router/index.js';
import Database from './database/index.js';
import bodyParser from 'koa-bodyparser';
import ErrorHandler from './utils/errorHandler.js';
class App{
    constructor(){
        this.config = process.env;
        this.connectDB();
        this.start();
    }
    connectDB(){
        let db = new Database();
    }
    mountMiddlewares(){
        this.app.use(bodyParser());
        this.app.use(ErrorHandler.errorHandler);
    }
    start(){
        this.app = new Koa();
        this.mountMiddlewares();
        new routeIndex(this.app);
        this.app.listen(this.config.PORT, ()=>{console.log("Running at "+this.config.PORT)});
    }
}

new App();
