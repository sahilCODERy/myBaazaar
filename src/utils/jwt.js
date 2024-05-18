import jwt from 'jsonwebtoken';

class JWT{
    constructor(){
        this.SECRET_KEY = process.env.SECRET_KEY;

    }
    authenticateJWT = async (ctx, next) => {
        const token = ctx.request.headers.authorization.split(' ')[1];  
        if (token) {
          await jwt.verify(token, this.SECRET_KEY, async (err, user) => {
            if (err) {
              console.log("🚀 ~ file: storeRoute.js:14 ~ err:", err)
            }
            if(user?.role){
                ctx.request.body.username = user.username
                ctx.request.body.role = user.role
            }
            await next();
          });
        } else {
          ctx.status(401);
        }
      };
      async authorize(ctx, next) {
        let role = ctx.request.body.role;
        if(role === "master"){
            await next();
        }else{
            ctx.body =  {message: "Unauthorized"};
        }
        };
}

export default new JWT();


