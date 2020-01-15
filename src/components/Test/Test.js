import React from "react";
import { isEmpty } from "ramda";

const Test = ({ fetchWorkers, createWorker, workers }) => (
  <div>
    <div>
      {isEmpty(workers) && workers.map(({ id }, i) => <div key={i}>{id}</div>)}
    </div>
    <button onClick={() => createWorker({ name: "goj" })}>Dodaj goja</button>
  </div>
);

export default Test;
