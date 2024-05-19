import Customers from '../models/customerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class CustomerServ {
    constructor() {
        this.config = process.env;
    }

    async login(params) {
        const user = await Customers.findOne({ username: params.username });
        if (!user) return { message: "User not found" };

        const valid = bcrypt.compareSync(params.password, user.password);
        if (!valid) return { message: "Wrong password" };

        const token = jwt.sign({ username: params.username, role: user.role }, this.config.SECRET_KEY, { expiresIn: '30m' }, { algorithm: "HS256" });
        console.log("🚀 ~ file: authServ.js:18 ~ token:", token)
        return { message: "Login Successful", token };

    }

    async signup(params) {
        const user = await Customers.findOne({ username: params.username });
        if (user) return { message: 'User already exists' };
        params._id = params.username;

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(params.password, salt);

        params.password = password;
        let c = await Customers.create(params);
        return { message: "Customer Created Successfully" };

    }
    async getMyInfo(params) {
            const c = await Customers.findOne({username: params.username}).lean() || {message: "Customer Not Found"};
            delete c.username;
            delete c.password;
            return c;
    }

    async getOrders(){

    }

    async updateMyInfo(params){
        const c = await Customers.findOne({username: params.username}).lean() || {message: "Customer Not Found"};
        for(let key in params){
            if(key!=="username" || key!=="role"){
                c[key] = params[key]
            }
        }
        await Customers.updateOne({username: params.username},c)
        return c;
    }
}

export default new CustomerServ();