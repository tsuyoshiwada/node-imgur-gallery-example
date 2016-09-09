export const getItemEntityById = (state, id) => state.entities.items[id];

export const getItemEntities = state => state.items.results.map(id =>
  getItemEntityById(state, id)
);
