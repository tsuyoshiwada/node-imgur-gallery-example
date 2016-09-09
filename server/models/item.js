/* eslint-disable no-console */
"use strict";

const mongoose = require("mongoose");
const imgur = require("imgur");
const { Schema } = mongoose;


const ItemSchema = new Schema({
  name: String,
  file: String, // id
  image: String,
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  size: { type: Number, default: 0 },
  type: String,
  thumbnail: String,
  favorite: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  created: { type: Date, defaut: Date.now },
  modified: { type: Date, defaut: Date.now }
}, {
  versionKey: false
});

ItemSchema.set("toJSON", { virtuals: true });


ItemSchema.statics.uploadItem = function(base64, name) {
  return imgur.uploadBase64(base64)
    .then(json => {
      const { data } = json;
      const entity = new this({
        name,
        file: data.id,
        width: data.width,
        height: data.height,
        image: data.link,
        size: data.size,
        type: data.type,

        // TODO: make thumbnail url
        // https://api.imgur.com/models/image
        thumbnail: data.link
      });

      return entity.save();
    });
};


module.exports = mongoose.model("Item", ItemSchema);
