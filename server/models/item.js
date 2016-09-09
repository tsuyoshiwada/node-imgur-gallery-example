/* eslint-disable no-console */
"use strict";

const path = require("path");
const url = require("url");
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


function makeThumbnailURL(link, size) {
  const parsedURL = url.parse(link);
  const parsedPath = path.parse(parsedURL.pathname);

  return [
    parsedURL.slashes ? `${parsedURL.protocol}//` : "",
    parsedURL.hostname,
    parsedURL.port != null ? `:${parsedURL.port}` : "",
    `${parsedPath.dir}/${parsedPath.name}${size}${parsedPath.ext}`,
    parsedURL.search != null ? parsedURL.search : ""
  ].join("");
}


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
        thumbnail: makeThumbnailURL(data.link, "l"),
        size: data.size,
        type: data.type
      });

      return entity.save();
    });
};


module.exports = mongoose.model("Item", ItemSchema);
