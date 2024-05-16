import mongoose from 'mongoose';
// import course from '../schema/courses'

mongoose.set("strictQuery", false);

class Database{
    constructor(){
        this.config = process.env
        this.connect();
    }
    async connect(){
        try {
            // mongodb+srv://sahil:VzLSEAvfThmcbcxX@baazaardb.mdu2k4t.mongodb.net/?retryWrites=true&w=majority&appName=baazaarDB
            let x = await mongoose.connect(`mongodb+srv://${this.config.DB_USER}:${this.config.DB_PASSWORD}@baazaardb.mdu2k4t.mongodb.net/${this.config.DB_NAME}?retryWrites=true&w=majority&appName=baazaarDB`);
            if(x){
                console.log("DB Connection Successful");
                return true;
            }
        } catch (error) {
            console.log("🚀 ~ file: index.ts:20 ~ error:", error)
        }
    }
}

export default Database;