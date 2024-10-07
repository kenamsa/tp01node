const Produit = require("../model/prodModel.js");

// Créer et sauvegarder un nouveau produit
exports.create = (req, res) => {
  // Valider la requête
  if (!req.body.nom || !req.body.description || !req.body.prix) {
    return res.status(400).send({
      message: "Le contenu du produit ne peut pas être vide.",
    });
  }

  // Créer un produit
  const produit = new Produit({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
  });

  // Sauvegarder le produit dans la base de données
  produit
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création du produit.",
      });
    });
};

// Récupérer tous les produits de la base de données
exports.findAll = (req, res) => {
  Produit.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récupération des produits.",
      });
    });
};

// Récupérer un produit spécifique par ID
exports.findOne = (req, res) => {
  Produit.findById(req.params.produitId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Erreur lors de la récupération du produit avec l'ID " + req.params.produitId,
      });
    });
};

// Mettre à jour un produit par ID
exports.update = (req, res) => {
  // Valider la requête
  if (!req.body.nom || !req.body.description || !req.body.prix) {
    return res.status(400).send({
      message: "Le contenu à mettre à jour ne peut pas être vide.",
    });
  }

  // Trouver et mettre à jour le produit
  Produit.findByIdAndUpdate(
    req.params.produitId,
    {
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Erreur lors de la mise à jour du produit avec l'ID " + req.params.produitId,
      });
    });
};

// Supprimer un produit par ID
exports.delete = (req, res) => {
  Produit.findByIdAndDelete(req.params.produitId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      res.send({ message: "Produit supprimé avec succès!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Produit non trouvé avec l'ID " + req.params.produitId,
        });
      }
      return res.status(500).send({
        message: "Impossible de supprimer le produit avec l'ID " + req.params.produitId,
      });
    });
};
