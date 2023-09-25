const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');

/*router.get('/', async (req, res) => {
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const product = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      product, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});*/

const { Sequelize } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      order: Sequelize.literal('rand()'),
      limit: 6,
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('homepage', { products, logged_in:req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const product = productData.get({ plain: true });

    res.render('productListing', { product, logged_in: req.session.logged_in }); // Set logged_in based on session

  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Product }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/categories', async (req, res) => {
  try {
    const productData = await Product.findAll({
      order: Sequelize.literal('rand()'),
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('project', { products, logged_in:req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    // Use `findByPk` to find a category by its primary key
    const categoryWithProducts = await Category.findByPk(categoryId, {
      include: [{ model: Product }],
    });

    // Render the "project" view with the category data
    res.render('project', { category: categoryWithProducts }); // Pass a single category, not an array
    console.log(categoryWithProducts.dataValues);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/add-to-cart/:productId', async (req, res) => {
  const { productId } = req.params;
  const { userId } = req.session; // Assuming you have user session data

  // Update the product's cart_id to match the user's cart_id
  await Product.update(
    { cart_id: userId },
    { where: { id: productId } }
  );

  // Redirect or respond as needed
});


router.get('/cart/:cartId', async (req, res) => {
  try {
    const { cartId } = req.params; // Get the cart ID from the URL parameter

    // Find all products that have the specified cart ID
    const productData = await Product.findAll({
      where: {
        cart_id: cartId, // Filter by cart_id
      },
      order: Sequelize.literal('rand()'),
    });

    const products = productData.map((product) => product.get({ plain: true }));

    // Render the "cart" view with the selected products
    res.render('cart', { products, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/cart/:cartId', async (req, res) => {
//   try {
//     const { cartId } = req.params; // Get the cart ID from the URL parameter

//     // Find all products that have the specified cart ID
//     const productData = await Product.findAll({
//       where: {
//         cart_id: cartId, // Filter by cart_id
//       },
//       order: Sequelize.literal('rand()'),
//     });

//     const products = productData.map((product) => product.get({ plain: true }));

//     console.log('Cart ID:', cartId);

//     // Render the "cart" view with the selected products
//     res.json(products)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
