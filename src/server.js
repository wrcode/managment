const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("electron-db");
const server = express();
const path = require("path");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(bodyParser.raw());

const location = path.join(__dirname, "database");

const createEndpoint = tableName => {
  server.get(`/${tableName}`, (req, res) => {
    db.getAll(tableName, location, (succ, data) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    });
  });

  server.post(`/${tableName}`, ({ body }, res) => {
    switch (body.type) {
      case "create":
        db.insertTableContent(tableName, location, body, () =>
          res.send({ ok: true })
        );
        break;

      case "delete":
        db.deleteRow(tableName, location, { id: body.id }, (succ, msg) => {
          res.send({ ok: true });
        });
        break;
    }
  });
};

createEndpoint("workers");
// createEndpoint("processes");
// createEndpoint("fuel");
// createEndpoint("raports");

server.listen(8080);
