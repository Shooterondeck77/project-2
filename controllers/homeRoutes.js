const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');
const { Sequelize } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      order: Sequelize.literal('rand()'),
      limit: 6,
    });

    const products = productData.map((product) => product.get({ plain: true }));

    const userId = req.session.user_id

    res.render('homepage', { products, userId, logged_in:req.session.logged_in, userid: req.session.userId });
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

    const userId = req.session.user_id

    const product = productData.get({ plain: true });

    res.render('productListing', { product, userId, logged_in: req.session.logged_in }); // Set logged_in based on session

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
    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/categories', async (req, res) => {
  try {
    const productData = await Product.findAll({
      order: Sequelize.literal('product_name ASC'),
    });

    const products = productData.map((product) => product.get({ plain: true }));

    const userId = req.session.user_id

    res.render('project', { products, userId, logged_in:req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    const categoryWithProducts = await Category.findByPk(categoryId, {
      include: [{ model: Product }],
    });

    const userId = req.session.user_id

    res.render('category', { category: categoryWithProducts, userId, logged_in: req.session.logged_in });

    console.log(categoryWithProducts.products[0].product_name)
    console.log(categoryWithProducts.dataValues)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/cart/:cartId', async (req, res) => {
  try {
    const { cartId } = req.params; 

    const productData = await Product.findAll({
      where: {
        cart_id: cartId,
      },
      order: Sequelize.literal('rand()'),
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('cart', { products, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
