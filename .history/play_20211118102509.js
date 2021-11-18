
const path=require('path');

const http=require('http');
const { parse } = require('path/posix');

const bodyParser = require('body-parser');
const express=require('express');
const pageNotFoundController=require('./controllers/404_controller');
// const { engine } = require('express-handlebars');

const app=express();


// app.engine('hbs', engine({ extname: '.hbs'}));


app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(shopRoutes);
app.use(adminRoutes);

app.use(pageNotFoundController.pageNotFound);

console.log("Server is listening on port 3000");
app.listen(3000);
