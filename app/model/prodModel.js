const mongoose = require("mongoose");

// Définir le schéma du produit
const ProductSchema = mongoose.Schema({
  nom: String,
  description:String,
  prix: Number,
  images: [String],
  
  },
);

// Exporter le modèle Produit
module.exports = mongoose.model("Produit", ProductSchema);
