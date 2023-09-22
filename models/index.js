const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
})

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: "CASCADE"
})

User.hasMany(Product, {
    foreignKey: 'user_id',
  });
  
  Product.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { Product, Category, User };
