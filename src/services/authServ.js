import Admins from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthServ {
    myCache;
    constructor() {
        this.config = process.env;
    }

    async login(params) {
        const user = await Admins.findOne({username: params.username});
        if (!user) return {message: "User not found"};

        const valid = bcrypt.compareSync(params.password, user.password);
        if (!valid) return {message: "Wrong password"};

        const token = jwt.sign({ username: params.username, role: user.role }, this.config.SECRET_KEY, { expiresIn: '30m' }, { algorithm: "HS256" });
        console.log("🚀 ~ file: authServ.js:18 ~ token:", token)
        return {message: "Login Successful", token};

    }

    async signup(params){
        const user = await Admins.findOne({username: params.username});
        if(user) return { message: 'User already exists' };

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(params.password, salt);

        params.password = password;
        let c = await Admins.create(params);
        return c;

    }
}

export default new AuthServ();