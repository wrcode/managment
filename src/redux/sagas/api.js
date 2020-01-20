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

const updateWorker = data =>
  axios.post(
    `${endpoint}/workers`,
    { type: "update", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

// Processes
const getProcesses = () =>
  axios.get(`${endpoint}/processes`).then(({ data }) => data);

const createProcess = data =>
  axios.post(
    `${endpoint}/processes`,
    { type: "create", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const deleteProcess = data =>
  axios.post(
    `${endpoint}/processes`,
    { type: "delete", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const editProcess = data =>
  axios.post(
    `${endpoint}/processes`,
    { type: "edit", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const updateProcess = data =>
  axios.post(
    `${endpoint}/processes`,
    { type: "update", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const Api = {
  getWorkers,
  createWorker,
  deleteWorker,
  editWorker,
  updateWorker,
  getProcesses,
  createProcess,
  deleteProcess,
  editProcess,
  updateProcess
};
export default Api;
