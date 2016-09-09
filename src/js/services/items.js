const API_ROOT = "/api";
const ITEMS_ENDPOINT = `${API_ROOT}/`;


function fetchJsonApi(...args) {
  return fetch(...args).then(res => res.json());
}


export function fetchItems() {
  return fetchJsonApi(ITEMS_ENDPOINT);
}

export function addItem(file) {
  const data = new FormData();
  data.append("file", file);

  return fetchJsonApi(ITEMS_ENDPOINT, {
    method: "POST",
    body: data
  });
}
