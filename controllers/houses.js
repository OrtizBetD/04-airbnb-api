const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .select(
      "type bedrooms title city region price rating images lat lng reviews"
    )
    .populate("type")
    .lean()
    .then(houses => {
      // Set first of images as 'image'
      houses.map((e, i) => {
        e.image = e.images[0];
        delete e.images;
      });
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  Houses.findById(req.params.id)
    .populate("type")
    .populate("host")
    .populate("amenities")
    .populate("reviews")
    .then(houses => {
      // Set first of images as 'image'
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

// Create route for single house

module.exports = router;
