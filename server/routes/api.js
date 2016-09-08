"use strict";

const Router = require("express").Router;
const router = Router();


router.get("/", (req, res) => {
  res.send("ok");
});


module.exports = router;
