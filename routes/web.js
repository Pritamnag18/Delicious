const homeController = require("../app/http/controllers/homeController")
const authController = require("../app/http/controllers/authController")
const cartController = require("../app/http/controllers/customers/cartController")
const orderController = require("../app/http/controllers/customers/orderController")
const guest = require("../app/http/middlewares/guest")
// const auth = require("../app/http/middlewares/auth")
// const AdminOrderController = require('../app/http/controllers/admin/orderController')

function initRoutes(app) {
  //Routes (Home Pages)
  app.get("/", homeController().index)

  //(Login Pages)
  app.get("/login", guest, authController().login)
  app.post("/login", authController().postLogin)

  //(Register Pages)
  app.get("/register", guest, authController().register)
  //Post Route
  app.post("/register", authController().postRegister)
  app.post("/logout", authController().logout)

  //(Cart Pages)
  app.get("/cart", cartController().index)
  app.post("/update-cart", cartController().update)

  //Customer routes
  app.post("/orders",  orderController().store);
  app.get("/customer/orders",  orderController().index)

  //Admin routes
  // app.get("/admin/orders",  AdminOrderController().index)

  // NOTE This are all get request method ☝
}

module.exports = initRoutes;
