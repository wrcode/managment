import React from "react";

const Test = ({ fetchWorkers, createWorker, deleteWorker, workers }) => (
  <div>
    <div>
      {workers.map(({ id, name }, i) => (
        <div key={i}>
          {name} o numerze id {id}
          <button onClick={() => deleteWorker({ id })}>Usuń </button>
        </div>
      ))}
    </div>
    <button onClick={() => createWorker({ name: "" })}>Dodaj </button>
  </div>
);

export default Test;
