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

module.exports = { Product, Category, User };
