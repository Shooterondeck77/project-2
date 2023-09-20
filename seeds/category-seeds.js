const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Basketball',
  },
  {
    category_name: 'Soccer',
  },
  {
    category_name: 'Volleyball',
  },
  {
    category_name: 'Badminton',
  },
  {
    category_name: 'Golf',
  },
  {
    category_name: 'Football'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
