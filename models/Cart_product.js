// Requiring our models
var db = require(".");

module.exports = function (sequelize, DataTypes) {
    const Cart_product = sequelize.define('Cart_Product', {
        CartId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.cart, 
                key: 'id'
            }
        },
        ProductId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Product, 
                key: 'id'
            }
            // defaultValue: 0
        }
    });

    return Cart_Product;
}