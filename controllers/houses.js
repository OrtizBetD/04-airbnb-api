const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .lean()
    .select("images description type city region price bedrooms rating")
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

// Create route for single house

module.exports = router;
