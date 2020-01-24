import axios from "axios";

const endpoint = "http://localhost:8080";

const getWorkers = data =>
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

// Advances

const getAdvances = ({ worker }) =>
  axios
    .get(`${endpoint}/advances`, {
      params: { ...(worker && { worker }) }
    })
    .then(({ data }) => data);

const createAdvance = data =>
  axios.post(
    `${endpoint}/advances`,
    { type: "create", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const deleteAdvance = data =>
  axios.post(
    `${endpoint}/advances`,
    { type: "delete", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const editAdvance = data =>
  axios.post(
    `${endpoint}/advances`,
    { type: "edit", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const updateAdvance = data =>
  axios.post(
    `${endpoint}/advances`,
    { type: "update", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

// Documents

const getDocuments = ({ name, documentType }) =>
  axios
    .get(`${endpoint}/documents`, {
      params: { ...(name && { name }), ...(documentType && { documentType }) }
    })
    .then(({ data }) => data);

const createDocument = data =>
  axios.post(
    `${endpoint}/documents`,
    { type: "create", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const deleteDocument = data =>
  axios.post(
    `${endpoint}/documents`,
    { type: "delete", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const editDocument = data =>
  axios.post(
    `${endpoint}/documents`,
    { type: "edit", ...data },
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  );

const updateDocument = data =>
  axios.post(
    `${endpoint}/documents`,
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
  updateProcess,
  getAdvances,
  createAdvance,
  deleteAdvance,
  editAdvance,
  updateAdvance,
  getDocuments,
  createDocument,
  deleteDocument,
  editDocument,
  updateDocument
};
export default Api;
