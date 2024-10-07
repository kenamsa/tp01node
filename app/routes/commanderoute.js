module.exports = (app) => {
    const commandeController = require("../controllers/commandeCon.js");

    app.post("/createCom", commandeController.create);
  
    app.get("/get-all", commandeController.findAll);
  
    app.get("/commande/:messageId", commandeController.findOne);
  
    app.put("/commande/:messageId", commandeController.update);
  
    app.delete("/commande/:messageId", commandeController.delete);
  };
