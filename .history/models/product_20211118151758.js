
const db = require('../utils/database');


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