const endpoint = "//localhost:8080";

const getWorkers = () =>
  fetch(`${endpoint}/workers`).then(response => response.json());

const createWorker = data =>
  fetch(`${endpoint}/workers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ type: "create", ...data })
  });

const deleteWorker = data =>
  fetch(`${endpoint}/workers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ type: "delete", ...data })
  });

const Api = {
  getWorkers,
  createWorker,
  deleteWorker
};
export default Api;
