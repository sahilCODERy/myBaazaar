import Router from "koa-router";
import authServ from "../services/authServ.js";

const authRouter = new Router();

authRouter.post('/login', async ctx => {
    let c = await authServ.login(ctx.request.body);
    ctx.body = c
});

authRouter.post('/signup', async ctx => {
    let c = await authServ.signup(ctx.request?.body);
    ctx.body = c
});


export default authRouter;