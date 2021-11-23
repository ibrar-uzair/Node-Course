
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
const shopRoutes=require('./routes/shop')
app.use(shopRoutes);
app.use(adminRoutes);

db.execute('select * from products')
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
});



app.use(pageNotFoundController.pageNotFound);

console.log("Server is listening on port 3000");
app.listen(3000);