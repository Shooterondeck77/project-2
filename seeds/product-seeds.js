const { Product } = require('../models');

const productData = [
  {
    product_name: 'Basketballs',
    price: 35.99,
    stock: 30,
    category_id: 1,
  },
  {
    product_name: 'Sleeves',
    price: 12.0,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'Soccer Shoes',
    price: 87.99,
    stock: 77,
    category_id: 1,
  },
  {
    product_name: 'Jerseys',
    price: 69.99,
    stock: 55,
    category_id: 1,
  },
  {
    product_name: 'Cleats',
    price: 79.99,
    stock: 31,
    category_id: 2,
  },
  {
    product_name: 'Shinpads',
    price: 15.99,
    stock: 45,
    category_id: 2,
  },
  {
    product_name: 'Soccer balls',
    price: 15.99,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'Gloves',
    price: 12.99,
    stock: 60,
    category_id: 2,
  },
  {
    product_name: 'Volleyballs',
    price: 34.99,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'Kneepads',
    price: 24.99,
    stock: 33,
    category_id: 3,
  },
  {
    product_name: 'Nets',
    price: 39.99,
    stock: 33,
    category_id: 3,
  },
  {
    product_name: 'Volleyball Shoes',
    price: 49.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Shuttlecocks',
    price: 11.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Racquet',
    price: 64.99,
    stock: 35,
    category_id: 4,
  },
  {
    product_name: 'Easy net',
    price: 44.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Badmintons shoes',
    price: 33.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Golf clubs',
    price: 125.99,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Golf bags',
    price: 80.99,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Golf shoes',
    price: 47.99,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Golf balls',
    price: 18.99,
    stock: 50,
    category_id: 5,
  },
  {
    product_name: 'Padding',
    price: 18.99,
    stock: 15,
    category_id: 6,
  },
  {
    product_name: 'Helmet',
    price: 21.99,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: 'Cleats',
    price: 21.99,
    stock: 30,
    category_id: 6,
  },
  {
    product_name: 'Footballs',
    price: 21.99,
    stock: 30,
    category_id: 6,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
