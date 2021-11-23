
const path=require('path');

const http=require('http');
const { parse } = require('path/posix');

const bodyParser = require('body-parser');
const express=require('express');
const pageNotFoundController=require('./controllers/404_controller');
const db = require('./utils/database');
const sequelize = require('./utils/database');

const app=express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');
const Product = require('./models/product');
const User = require('./models/user');
app.use(shopRoutes);
app.use(adminRoutes);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'}) //Constraints are optional
User.hasMany(Product) //We can use both of these ways to make one to one relationship

app.use(pageNotFoundController.pageNotFound);

console.log("Server is listening on port 3000");

sequelize
.sync()
.then(result=>{
    console.log("Checking user");
    return User.findByPk(1);
})
.then(user=>{
    if(!user){
        return user.create({userName:"Uzair",email:"uzair.ibrar@gmail.com"})
    }
    return user;
})
.then(user=>{
    console.log(user);
    app.listen(3000)
})
.catch(err=>{
    console.log(err);
})
