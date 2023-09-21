const { Product } = require('../models');

const productData = [
  {
    product_name: 'Basketballs',
    price: 35.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 1,
  },
  {
    product_name: 'Sleeves',
    price: 12.00,
    description: 'This is a test description',
    condition: 'new',
    category_id: 1,
  },
  {
    product_name: 'Soccer Shoes',
    price: 87.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 1,
  },
  {
    product_name: 'Jerseys',
    price: 69.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 1,
  },
  {
    product_name: 'Cleats',
    price: 79.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 2,
  },
  {
    product_name: 'Shinpads',
    price: 15.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 2,
  },
  {
    product_name: 'Soccer balls',
    price: 15.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 2,
  },
  {
    product_name: 'Gloves',
    price: 12.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 2,
  },
  {
    product_name: 'Volleyballs',
    price: 34.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 3,
  },
  {
    product_name: 'Kneepads',
    price: 24.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 3,
  },
  {
    product_name: 'Nets',
    price: 39.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 3,
  },
  {
    product_name: 'Volleyball Shoes',
    price: 49.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 3,
  },
  {
    product_name: 'Shuttlecocks',
    price: 11.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 4,
  },
  {
    product_name: 'Racquet',
    price: 64.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 4,
  },
  {
    product_name: 'Easy net',
    price: 44.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 4,
  },
  {
    product_name: 'Badmintons shoes',
    price: 33.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 4,
  },
  {
    product_name: 'Golf clubs',
    price: 125.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 5,
  },
  {
    product_name: 'Golf bags',
    price: 80.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 5,
  },
  {
    product_name: 'Golf shoes',
    price: 47.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 5,
  },
  {
    product_name: 'Golf balls',
    price: 18.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 5,
  },
  {
    product_name: 'Padding',
    price: 18.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 6,
  },
  {
    product_name: 'Helmet',
    price: 21.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 6,
  },
  {
    product_name: 'Cleats',
    price: 21.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 6,
  },
  {
    product_name: 'Footballs',
    price: 21.99,
    description: 'This is a test description',
    condition: 'new',
    category_id: 6,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
