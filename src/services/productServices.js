const Products = require("../../models").Products;

module.exports = {
  //TODO: COMPLETE IT LATER
  // addProducts: async (req) => {
  //   try {
  //     const res = await Products.create(req.body);
  //     return {
  //       statusCode: 201,
  //       data: `Product Added successfully`,
  //     };
  //   } catch (e) {
  //     return {
  //       statusCode: 500,
  //       data: `Error`,
  //     };
  //   }
  //   },
  getProducts: async (req) => {
    try {
      console.log("GET");
      const res = await Products.findAll();
      console.log(res);
      return {
        statusCode: 200,
        data: res,
      };
    } catch (e) {
      return {
        statusCode: 500,
        data: `Error`,
      };
    }
  },
  updateProducts: async (req) => {
    console.log(req.params.id);
    try {
      const res = Products.update(
        {
          quantity: req.body.quantity,
          price: req.body.price,
          name: req.body.name,
        },
        { where: { id: req.params.id } }
      );
      return {
        statusCode: 200,
        data: `Updated Product Sucessfully`,
      };
    } catch (e) {
      return {
        statusCode: 500,
        data: `Error`,
      };
    }
  },
};
