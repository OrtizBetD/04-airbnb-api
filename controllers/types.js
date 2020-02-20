const Types = require("../models/types");
const router = require("express").Router();

router.get("/", (req, res) => {
  Types.find({}).then(t => res.send(t));
});

module.exports = router;
