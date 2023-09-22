// Requiring our models
var db = require("../models");
var isAuth = require("../middleware/isAuth"); // Import your authentication middleware
// Routes

module.exports = function (app) {

  // GET route for getting all of the carts
  app.get("/api/cart",isAuth, function (req, res) {
    db.Cart.findAll({
      include: [db.Book]
    }).then(function (dbCart) {
      console.log('In .get /api/cart - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbCart: ', dbCart);
      res.json(dbCart);
    });
  });


  // Get route for retrieving a single cart for a Userid
  app.get("/api/cart/:UserId", function (req, res) {
    db.Cart.findOne({
      where: {
        UserId: req.params.UserId
      },
     
    }).then(function (dbCart) {
      console.log('In .get /api/cart - findOne()');
      console.log('req.params.UserId: ', req.params.UserId);
      console.log('dbCart: ', dbCart);
      res.json(dbCart);
    });
  });

 
  // POST route for saving a new cart
  app.post("/api/cart",isAuth, function (req, res) {
    db.Cart.create({
      UserId: req.body.UserId,
      BookId: req.body.ProductId
    }).then(function (dbCart) {
      console.log('In .POST /api/carts - create()');
      console.log('req.body: ', req.body);
      console.log('dbCart: ', dbCart);
      console.log('dbCart.id: ', dbCart.id);
   

      // Also insert into the intermediary table
      db.Cart_Product.create({
        Product_id: req.body.ProductId
      }).then(function (dbCart_Product) {
        console.log('In .POST /api/carts - create() - cart_Product');
        console.log('req.body: ', req.body);
        console.log('dbCart_Product: ', dbCart_Product);
        res.json(Cart_Product);
      });
    });
  });


  // DELETE route for deleting a cart
  app.delete("/api/cart/:UserId", function (req, res) {
    db.Cart.destroy({
      where: {
        UserId: req.params.UserId
      }
    }).then(function (dbCart) {
      console.log('In .DELETE /api/carts - destroy()');
      console.log('req.params.UserId: ', req.params.UserId);
      console.log('dbCart: ', dbCart);
      res.json(dbCart);
    });
  });


  // PUT route for updating posts
  app.put("/api/cart", function (req, res) {
    db.Cart.update(
      req.body,
      {
        where: {
          UserId: req.body.UserId
        }
      }).then(function (dbCart) {
        console.log('In .PUT /api/cart - update()');
        console.log('req.body.UserId: ', req.body.UserId);
        console.log('dbCart: ', dbCart);
        res.json(dbCart);
      });
  });

};