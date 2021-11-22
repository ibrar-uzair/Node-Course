
const path=require('path');

const http=require('http');
const { parse } = require('path/posix');

const bodyParser = require('body-parser');
const express=require('express');
const pageNotFoundController=require('./controllers/404_controller');
const db = require('./utils/database');


const app=express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');
const sequelize = require('./utils/database');
app.use(shopRoutes);
app.use(adminRoutes);

db.execute('select * from product')
.then(result=>{
    console.log(result[0]);
})
.catch(err=>{
    console.log(err);
});
 


app.use(pageNotFoundController.pageNotFound);

console.log("Server is listening on port 3000");

sequelize
.sync()
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err);
})
