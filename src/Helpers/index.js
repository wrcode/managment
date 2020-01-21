import { pipe, head, filter, prop } from "ramda";

export const getWorkerNameByID = (workerID, workers) =>
  pipe(
    filter(({ id }) => id === workerID),
    head,
    data => `${prop("name")(data)} ${prop("surname")(data)}`
  )(workers);
