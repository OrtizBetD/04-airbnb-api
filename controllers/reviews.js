const Reviews = require("../models/reviews");
const router = require("express").Router();

router.get(`/`, (req, res) => {
  Reviews.find(req.query)
    .populate("author", "house")
    .then(r => res.send(r));
});

module.exports = router;
