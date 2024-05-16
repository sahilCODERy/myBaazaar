import Koa from 'koa';
import routeIndex from './router/index.js';
import Database from './database/index.js';
import bodyParser from 'koa-bodyparser';

class App{
    constructor(){
        this.config = process.env;
        this.connectDB();
        this.start();
    }
    connectDB(){
        let db = new Database();
    }
    start(){
        const app = new Koa();
        app.use(bodyParser());
        const errorHandler = async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.log("🚀 ~ file: app.js:23 ~ err:", err)
                console.error(err.stack);
                ctx.status = err.statusCode || err.status || 500;
                ctx.body = {
                    message: err.message || 'Internal Server Error',
                    stack: process.env.NODE_ENV === 'production' ? null : err.stack
                };
            }
        };
        app.use(errorHandler);
        new routeIndex(app);
        app.listen(this.config.PORT, ()=>{console.log("Running at "+this.config.PORT)});
    }
}

new App();
