import Stores from '../models/storesModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class StoreServ {
    constructor() {
        this.config = process.env;
    }

    async login(params) {
        const user = await Stores.findOne({ username: params.username });
        if (!user) return { message: "User not found" };

        const valid = bcrypt.compareSync(params.password, user.password);
        if (!valid) return { message: "Wrong password" };

        const token = jwt.sign({ username: params.username, role: user.role }, this.config.SECRET_KEY, { expiresIn: '30m' }, { algorithm: "HS256" });
        console.log("🚀 ~ file: authServ.js:18 ~ token:", token)
        return { message: "Login Successful", token };

    }

    async signup(params) {
        const user = await Stores.findOne({ username: params.username });
        if (user) return { message: 'User already exists' };
        params._id = params.username;

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(params.password, salt);

        params.password = password;
        let c = await Stores.create(params);
        return { message: "Store Created Successfully" };

    }

    async getAllStores() {
        let c = await Stores.find();
        return c;
    }

    async getMyStore(params) {

        const store = await Stores.findOne({ username: params.username }).lean() || { message: "Store Not Found" };
        const storeRes = { ...store };
        delete storeRes.username
        delete storeRes.password
        return storeRes;
    }
}

export default new StoreServ();