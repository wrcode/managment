const endpoint = "//localhost:8080";

const getWorkers = (id, data) => fetch(`${endpoint}/workers`, data);

const Api = {
  getWorkers
};
export default Api;
