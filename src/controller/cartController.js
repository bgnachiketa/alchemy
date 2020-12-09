const cartServices = require("../services/cartServices");

module.exports = {
  addToCart: async (req, resp) => {
    console.log(req.params.id);
    try {
      const { status, data } = await cartServices.addToCart(req);
      resp.send({ status: status, data: data });
      //resp.send("Success");
    } catch (e) {
      resp.send("Error");
    }
  },
};
