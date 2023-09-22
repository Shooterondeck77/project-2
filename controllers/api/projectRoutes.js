const router = require('express').Router();
const { Project } = require('../../models');
const { Product, Review } = require('../models'); 

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to fetch a specific product by ID
router.get('/products/:id', async (req, res) => {
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

// Route to fetch reviews for a specific product
router.get('/products/:id/reviews', async (req, res) => {
  try {
    const productId = req.params.id;
    const reviews = await Review.findAll({ where: { product_id: productId } });

    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

