const express = require("express");
const app = express();
const usrController = require("../controller/userController");
const prodController = require("../controller/productController");
const cartController = require("../controller/cartController");

app.use(express.json());

app.post("/userSignup", usrController.userSignup);
app.post("/userLogin", usrController.userLogin);

//Already inserted the products and categories to DB
app.get("/getProduct", prodController.getProducts);
app.patch("/updateProducts/:id", prodController.updateProducts);

app.post("/addToCart/:id", cartController.addToCart);

app.listen("3000", () => {
  console.log("The App is running");
});
