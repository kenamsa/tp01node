module.exports = (app) => {
    const productController = require("../controllers/ProductController.js");

    app.post("/create", productController.create);
  
    app.get("/get-all", productController.findAll);
  
    app.get("/message/:messageId", productController.findOne);
  
    app.put("/message/:messageId", productController.update);
  
    app.delete("/message/:messageId", productController.delete);
  };
