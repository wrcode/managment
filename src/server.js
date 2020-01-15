const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("electron-db");
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

const createEndpoint = tableName => {
  server.get(`/${tableName}`, (req, res) => {
    db.getRows(tableName, {}, result => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(result));
    });
  });

  server.post(`/${tableName}`, ({ params }) => {
    db.insertTableContent(tableName, params, () => {
      res.sendStatus(200);
    });
  });
};

createEndpoint("workers");
// createEndpoint("processes");
// createEndpoint("fuel");
// createEndpoint("raports");

server.listen(8080);
