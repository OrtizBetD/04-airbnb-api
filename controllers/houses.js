const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .populate("type amenities host")
    .select(
      "images description type city region price bedrooms rating title lat lng amenities"
    )
    .lean()
    .then(houses => {
      houses.map(house => {
        house.image = house.images[0];
        delete house.images;
      });
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  Houses.findById({ _id: req.params.id })
    .populate("type host amenities")
    .then(house => {
      res.send(house);
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = router;
