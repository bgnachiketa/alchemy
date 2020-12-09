const Cart = require("../../models").Cart;
const CartProducts = require("../../models").CartProducts;
const Products = require("../../models").Products;

module.exports = {
  addToCart: async (req) => {
    console.log(req.params.id);
    try {
      const checkProduct = await Products.findAll({
        where: {
          id: req.params.id,
        },
      });
      console.log(checkProduct[0].quantity);
      if (checkProduct[0].quantity > 0) {
        const res = await CartProducts.create({
          cartId: req.body.id,
          productId: checkProduct[0].id,
          quantity: 1,
          netAmount: checkProduct[0].price,
        });
        const cart = await Cart.create({
          //TODO: FIND TOTAL FROM CARTPRODUCTS
        });
      }
      return {
        status: 200,
        data: "Successfully added to cart",
      };
    } catch (e) {
      return {
        status: 400,
        data: "Errorrr",
      };
    }
  },
  //TODO UPDATE ?DELETE
};
