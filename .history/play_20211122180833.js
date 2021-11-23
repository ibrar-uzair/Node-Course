
// --------------------------------> Imports
const path=require('path');
const http=require('http');
const { parse } = require('path/posix');
const bodyParser = require('body-parser');
const express=require('express');
const pageNotFoundController=require('./controllers/404_controller');
const db = require('./utils/database');
const sequelize = require('./utils/database');
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');
const Product = require('./models/product');
const User = require('./models/user');

const app=express();
app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

// --------------------------------> Generic Routes

// Generic Routes always run whenever some route is changed
app.use((req, res, next) => {
    User.findByPk(1)
      .then(user => {
        console.log(user);
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });


app.use(shopRoutes);
app.use(adminRoutes);
app.use(pageNotFoundController.pageNotFound);

// --------------------------------> Associations

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'}) //Constraints are optional
User.hasMany(Product) //We can use both of these ways to make one to one relationship

sequelize
  //   When we don't need to apply operations to the database then we use force:true
  // .sync({ force: true }) 
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({userName:"Uzair",userEmail:'uzair.ibrar@gmail.com'});
    }
    return user;
  })
  .then(user => {
    console.log("Server is listening on port 3000");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
