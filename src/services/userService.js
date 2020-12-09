//const { Model } = require("sequelize/types");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models").Users;
const Role = require("../../models").Roles;
var validator = require("email-validator");

validator.validate("test@email.com");

module.exports = {
  userSignup: async (req) => {
    try {
      if (validator.validate(req.body.email)) {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        const res = await User.create(req.body);
        //console.log(res);
        //TODO ADD SECRET,DB, etc to .ENV LATER
        const token = await jwt.sign({ email: req.body.email }, "someSecret");
        console.log(token);
        return {
          statusCode: 201,
          data: `User created successfully`,
          token: token,
        };
      } else {
        return {
          statusCode: 500,
          data: `Enter Valid Email`,
        };
      }
    } catch (e) {
      return {
        statusCode: 500,
        data: `Error`,
      };
    }
  },
  userLogin: async (req) => {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        return {
          statusCode: 500,
          data: `Unable to Login`,
        };
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        throw new Error("Unable to login");
      }
      const token = await jwt.sign({ email: req.body.email }, "someSecret");
      console.log(token);
      //   const token = await jwt.sign(
      //     { email: req.body.email },
      //     "secretHere",
      //     (err, token) => {
      //       if (!err) {
      //         return token;
      //       }
      //     }
      //   );
      return {
        statusCode: 201,
        data: `User LoggedIn successfully`,
        token: token,
      };
    } catch (e) {
      return {
        statusCode: 500,
        data: `Unable to Login`,
      };
    }
  },
};
