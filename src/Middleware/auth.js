//VERIFY AUTHORIZATION AND AUTHENTICATION
const jwt = require("jsonwebtoken");
const auth = async (req, resp, next) => {
  try {
    //     const role = {
    //         merchent: 1,
    //         user:2
    //   } TODO : Implement role based authorization
    const token = req.header("Authorization").replace("Bearer ", "");
    //console.log(token)
    const decode = jwt.verify(token, "someSecret");
    //TODO : FIND USER AND SO NEEDFULL
    if (!user) {
      throw new Error();
    }
    req.token = token;
    //req.user = user TODO
    next();
  } catch (e) {
    resp.status(401).send({ error: "Please authenticate" });
  }
};
