const Amenities = require("../models/amenities");
const router = require("express").Router();

router.get("/", (req, res) => {
  Amenities.find(req.query).then(a => res.send(a));
});

module.exports = router;
