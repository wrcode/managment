import { pipe, head, filter, prop, map, length } from "ramda";
import moment from "moment";

export const getWorkerByID = (workerID, workers) =>
  pipe(
    filter(({ id }) => id === workerID),
    head
  )(workers);

export const getWorkerNameByID = (workerID, workers) =>
  pipe(
    filter(({ id }) => id === workerID),
    head,
    data => `${prop("name")(data)} ${prop("surname")(data)}`
  )(workers);

export const getWorkersAsOptions = map(data => ({
  label: `${prop("name")(data)} ${prop("surname")(data)}`,
  value: prop("id")(data)
}));

export const getCount = length;

export const getAdvancesCount = (data, currentMonth) =>
  pipe(
    filter(({ month }) => moment(month).isSame(currentMonth, "month")),
    length
  )(data);

export const getAdvancesAmount = (data, currentMonth) => {
  const adv = filter(({ month }) =>
    moment(month).isSame(currentMonth, "month")
  )(data);

  return adv.reduce((acc, { amount }) => Number(acc) + Number(amount), 0);
};

export const getPaymentsAmount = (data, currentMonth) => {
  const adv = filter(({ month }) =>
    moment(month).isSame(currentMonth, "month")
  )(data);

  return adv.reduce((acc, { total }) => Number(acc) + Number(total), 0);
};

export const getPaymentsCount = (data, currentMonth) =>
  pipe(
    filter(({ month }) => moment(month).isSame(currentMonth, "month")),
    length
  )(data);
export const getProcessesAmount = (data, currentDate) => {
  const adv = filter(({ date }) => moment(date).isSame(currentDate, "month"))(
    data
  );

  return adv.reduce(
    (acc, item) => ({
      material: Number(acc.material) + Number(item.material),
      scrap: Number(acc.scrap) + Number(item.scrap),
      fuel: Number(acc.fuel) + Number(item.fuel),
      carbon: Number(acc.carbon) + Number(item.carbon)
    }),
    {
      material: 0,
      fuel: 0,
      scrap: 0,
      carbon: 0
    }
  );
};

export const getWorkerById = (workers, workerID) =>
  pipe(
    filter(({ id }) => id === workerID),
    head
  )(workers);
