import Products from '../models/productsModel.js';

class ProductServ {
    constructor() {
    }

    async getAllProducts() {
                let c = await Products.find();
                return c;
    }

    async addProducts(params){
        let c = await Products.create(products);
        
    }
}

export default new ProductServ();