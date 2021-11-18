
const db = require('../utils/database');


module.exports = class Product{
    constructor(t){
        this.title=t
    }

    save(){
        return db.execute('INSERT INTO shop.product (productName) VALUES (?);',[this.title]);
    }

    static getAllProducts(){
        return db.execute('Select * from product');
    }

}