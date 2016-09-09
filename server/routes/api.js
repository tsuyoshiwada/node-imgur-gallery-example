"use strict";

const Router = require("express").Router;
const multer = require("multer");
const imgur = require("imgur");

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.get("/", (req, res) => {
  res.send("ok");
});


router.post("/", upload.single("file"), (req, res) => {
  const { file } = req;
  const base64 = file.buffer.toString("base64");

  imgur.uploadBase64(base64)
    .then(json => {
      res.json(json);
    })
    .catch(err => {
      console.error(err); // eslint-disable-line no-console
    });
});


module.exports = router;
