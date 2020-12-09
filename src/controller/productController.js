const productService = require("../services/productServices");

module.exports = {
  getProducts: async (req, resp) => {
    try {
      //console.log("NBG 1");
      const { status, data } = await productService.getProducts(req);
      resp.send({ data: data });
      //resp.send("Success");
    } catch (e) {
      resp.send("Error");
    }
  },
  updateProducts: async (req, resp) => {
    try {
      console.log(req.params.id);
      const { status, data } = await productService.updateProducts(req);
      resp.send({ data: data });
      //resp.send("Success");
    } catch (e) {
      resp.send("Error");
    }
  },
};
