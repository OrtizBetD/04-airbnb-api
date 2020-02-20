const Reviews = require("../models/reviews");
const router = require("express").Router();

router.get(`/`, (req, res) => {
  console.log(req.query);
  Reviews.find(req.query)
    .populate("author", "houses")
    .then(r => res.send(r));
  // Respond with all reviews belonging to specific house and populate nested fields
});

module.exports = router;
