import React from "react";

const Test = ({ createWorker, deleteWorker, editWorker, workers }) => (
  <div>
    <div>
      {workers.map(({ id, name }, i) => (
        <div key={i}>
          {name} o numerze id {id}
          <button onClick={() => deleteWorker({ id })}>Usuń goja</button>
          <button
            onClick={() => {
              editWorker({ id });
            }}
          >
            Edytuj
          </button>
        </div>
      ))}
    </div>
    <button
      onClick={() => {
        createWorker({ name: "gojec lojkiestra" });
      }}
    >
      Dodaj goja
    </button>
  </div>
);

export default Test;
