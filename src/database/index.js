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
            let x = await mongoose.connect(this.config.DB_URL);
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