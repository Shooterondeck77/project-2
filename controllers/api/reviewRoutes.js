const router = require('express').Router();
const { Review } = require('../../models');

// Retrieve reviews for a product
router.get('/:productId/reviews', async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviews = await Review.findAll({ where: { product_id: productId } });
    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a review for a product
router.post('/:productId/reviews', async (req, res) => {
  try {
    const productId = req.params.productId;
    const newReview = await Review.create({ ...req.body, product_id: productId });
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

