
const db = require('../utils/database');


const products=[]

module.exports = class Product{
    constructor(t){
        this.title=t
    }

    save(){
        products.push(this)
    }

    static getAllProducts(){
        return db.execute('Select * from products');
    }

}