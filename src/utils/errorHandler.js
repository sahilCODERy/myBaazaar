class ErrorHandler {
    async errorHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            console.log("🚀 ~ file: app.js:23 ~ err:", err)
            //Insert error logs to db

            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                message: 'Internal Server Error',
                // stack: process.env.NODE_ENV === 'production' ? null : err.stack
            };
        }
    }
}

export default new ErrorHandler()