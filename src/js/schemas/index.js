import { Schema } from "normalizr";

const ItemSchema = new Schema("items", {
  defaults: {
    isSaved: false,
    isUpdating: false,
    isDeleting: false
  }
});

export { ItemSchema };
