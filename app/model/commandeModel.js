const mongoose = require("mongoose");

// Définir le schéma du produit
const CommandeSchema = mongoose.Schema({
    produit: [{ type: mongoose.Schema.Types.ObjectId, ref: "Produit",quantity: Number, }], 
    reference: Number,
    date:Date,
  },
);


// Exporter le modèle Produit
module.exports = mongoose.model("Commande", CommandeSchema);
