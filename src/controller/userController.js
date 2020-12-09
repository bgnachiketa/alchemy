const userService = require("../services/userService");

module.exports = {
  userSignup: async (req, resp) => {
    try {
      const { status, data, token } = await userService.userSignup(req);
      resp.send({ data: data, token: token });
      //resp.send("Success");
    } catch (e) {
      resp.sendStatus(400).send("Error");
    }
  },
  userLogin: async (req, resp) => {
    try {
      const { status, data, token } = await userService.userLogin(req);
      resp.send({ data: data, token: token });
    } catch (e) {
      resp.send("Error");
    }
  },
};
