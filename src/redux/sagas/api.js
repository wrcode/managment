import axios from "axios";
const endpoint = "http://localhost:8080";

const getWorkers = () =>
  axios.get(`${endpoint}/workers`).then(({ data }) => data);

const createWorker = data =>
  axios.post(
    `${endpoint}/workers`,
    { type: "create", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const deleteWorker = data =>
  axios.post(
    `${endpoint}/workers`,
    { type: "delete", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const editWorker = data =>
  axios.post(
    `${endpoint}/workers`,
    { type: "edit", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const Api = {
  getWorkers,
  createWorker,
  deleteWorker,
  editWorker
};
export default Api;
