const mongoose = require("mongoose");

// Définir le schéma du produit
const ProductSchema = mongoose.Schema({
  nom: {
    type: String,
  },
  description: {
    type: String,
  },
  prix: {
    type: Number,
  },
});

// Exporter le modèle Produit
module.exports = mongoose.model("Produit", ProductSchema);
