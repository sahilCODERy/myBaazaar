import Products from '../models/productsModel.js';
import { faker } from '@faker-js/faker';
// import NodeCache from 'node-cache';

class ProductServ {
    myCache;
    constructor() {
        // this.myCache = new NodeCache();
        // console.log("🚀 ~ file: coursesServ.ts:10 ~ this.myCache:", this.myCache)
    }

    async getAllProducts() {

        // if(this.myCache.has("mycourse")){
        //     let cacheData = this.myCache.get("mycourse") as string;
        //     return JSON.parse(cacheData);
        // }
        // else{
                
                let c = await Products.find();
                // this.myCache.set("mycourse",JSON.stringify(c));
                return c;
    }

    async addProducts(){
        let products = [];
        for(let i=0;i<5;i++){
            let product = {}
            product._id = i.toString();
            product.product_name = faker.commerce.productName();
            product.store_id = (5-i).toString();
            products.push(product);
        }
        console.log("🚀 ~ file: productServ.js:27 ~ products:", products)
        let c = await Products.insertMany(products);
    }
}

export default new ProductServ();