const Types = require("../models/types");
const router = require("express").Router();

router.get("/", (req, res) => {
  Types.find({}).then(data => res.send(data));
});

module.exports = router;
