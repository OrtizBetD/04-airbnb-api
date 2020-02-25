const Reviews = require("../models/reviews");
const router = require("express").Router();
require("../models/users");
/*router.get("/", (req, res) => {
  Reviews.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err));
});*/

/*router.get("/", (req, res) =>
  Reviews.find(req.query)
    .populate("name,author")
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => res.send(err))
);*/

router.get("/", (req, res) => {
  console.log(req.query);
  Reviews.find(req.query)
    .populate({
      path: "author"
    })
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => res.send(err));
});

/*router.get("/", (req, res) =>
  Reviews.find({ house: req.params })
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => res.send(err))
);*/
module.exports = router;
