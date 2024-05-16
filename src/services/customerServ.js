import Stores from '../models/storesModel';
import { faker } from '@faker-js/faker';
// import NodeCache from 'node-cache';

class StoresServ {
    myCache;
    constructor() {
        // this.myCache = new NodeCache();
        // console.log("🚀 ~ file: coursesServ.ts:10 ~ this.myCache:", this.myCache)
    }

    async getAllStores() {

        // if(this.myCache.has("mycourse")){
        //     let cacheData = this.myCache.get("mycourse") as string;
        //     return JSON.parse(cacheData);
        // }
        // else{
            let c = await Stores.find();
            // this.myCache.set("mycourse",JSON.stringify(c));
            return c;
        // }
    }

    async addStores(){
        let stores = [];
        for(let i=0;i<=5;i++){
            let store = {}
            store.id = i.toString();
            store.title = faker.person.jobTitle();
            store.type = faker.animal.type();
            stores.push(store);
        }
        let c = await Stores.insertMany(stores);
    }
}

export default new StoresServ();