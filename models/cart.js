

module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    });

    Cart.associate = function (models) {
       Cart.belongsTo(models.User, { 
            foreignKey: 'Product_id',
            onDelete: 'CASCADE',
            hooks: true
        });
        Cart.belongsToMany(models.Products, { through: 'cart_products' }); 
    };

    return Cart;
};