
const db = require('../utils/database');


module.exports = class Product{
    constructor(t){
        this.title=t
    }

    save(){
        products.push(this)
    }

    static getAllProducts(){
        const prods=db.execute('Select * from product').then(result=>{
            console.log(result[0]);
        })
        .catch(err=>{
            console.log(err);
        });
        return prods
    }

}