import Router from "koa-router";
import CustomerServ from "../services/customerServ.js";
import JWT from "../utils/jwt.js";

const customerRouter = new Router();

customerRouter.post('/login', async ctx => {
    let c = await CustomerServ.login(ctx.request.body);
    ctx.body = c
});

customerRouter.post('/signup', async ctx => {
    let c = await CustomerServ.signup(ctx.request.body);
    ctx.body = c
});



customerRouter.get('/getMyInfo', JWT.authenticateJWT, async ctx => {
    let c = await CustomerServ.getMyInfo(ctx.request.body);
    ctx.body = c
});

customerRouter.post('/updateMyInfo', JWT.authenticateJWT, async ctx => {
    let c = await CustomerServ.updateMyInfo(ctx.request.body);
    ctx.body = c
});


export default customerRouter;