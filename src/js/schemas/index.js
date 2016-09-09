import { Schema } from "normalizr";

const ItemSchema = new Schema("items", {
  defaults: {
    isUpdating: false,
    isDeleting: false
  }
});

export { ItemSchema };
