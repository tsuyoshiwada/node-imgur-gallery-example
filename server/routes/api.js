/* eslint-disable no-console */
"use strict";

const Router = require("express").Router;
const multer = require("multer");
const Item = require("../models/item");

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.get("/", (req, res) => {
  Item.find({})
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


router.post("/", upload.single("file"), (req, res) => {
  const { file, body: { name } } = req;
  const base64 = file.buffer.toString("base64");

  Item.uploadItem(base64, name)
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error });
    });
});


module.exports = router;
