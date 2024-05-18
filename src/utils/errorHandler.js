async function ErrorHandle(ctx, next) {
    try {
        await next();
    } catch (err) {
        console.log("🚀 ~ file: app.js:23 ~ err:", err)
        console.error(err.stack);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message || 'Internal Server Error',
            // stack: process.env.NODE_ENV === 'production' ? null : err.stack
        };
    }
};


export default ErrorHandle