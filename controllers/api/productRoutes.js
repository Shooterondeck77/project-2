const router = require('express').Router();
const { Product, Category, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);

  } catch (err) {
    res.status(400).json(err);
  }
});

/*{
  "id": 1,
  "product_name": "Basketballs",
  "price": "36",
  "description": "This is a test description",
  "condition": "new",
  "category_id": 1
}*/

// Delete a product
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch all products
router.get('/', (req, res) => {
  Product.findAll().then((prodData) => {
    res.json(prodData);
  });
});

router.get('/categories/', async (req, res) => {
  try {
    const categoriesWithProducts = await Category.findAll({
      include: [{ model: Product }],
    });

    res.json(categoriesWithProducts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id/reviews', async (req, res) => {
  try {
    const productId = req.params.id;
    const reviews = await Review.findAll({ where: { product_id: productId } });

    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryId = req.params.id; // Get the category ID from the URL parameter

    // Use `findByPk` to find a category by its primary key and include associated products
    const categoryWithProducts = await Category.findByPk(categoryId, {
      include: [{ model: Product }],
    });

    res.json(categoryWithProducts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/cartid/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const  userId  = req.session.user_id;

    // Find the product by its ID
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    console.log(req.session.user_id)
    console.log(userId)
    console.log('heythere')
    // Update the product's cart_id to match the user's cart_id
    product.cart_id = userId; // Assuming `userId` represents the user's cart_id

    // Save the updated product
    await product.save();

    res.status(200).json({ message: 'Product cart_id updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;

