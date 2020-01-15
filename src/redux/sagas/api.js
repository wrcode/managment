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
    body: JSON.stringify(data)
  });

const Api = {
  getWorkers,
  createWorker
};
export default Api;
