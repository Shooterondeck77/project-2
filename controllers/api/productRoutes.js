const router = require('express').Router();
const { Product, Category } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.get('/', (req, res) => {
  Product.findAll().then((prodData) => {
    res.json(prodData);
  });
});

router.get('/categories', async (req, res) => {
  try {
    const categoriesWithProducts = await Category.findAll({
      include: [{ model: Product }],
    });

    res.json(categoriesWithProducts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;
