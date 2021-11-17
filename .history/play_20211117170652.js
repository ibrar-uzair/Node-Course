
const path=require('path');

const http=require('http');
const { parse } = require('path/posix');

const express=require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app=express();


app.engine('hbs',exphbs());
app.set('view engine','hbs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(shopRoutes);
app.use(adminRoutes.router);

app.use((req,res,next)=>{
    res.status(404).render('pagenotfound')
})

console.log("Server is listening on port 3000");
app.listen(3000);
