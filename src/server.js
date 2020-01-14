const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("electron-db");
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

const createResponseEndpoint = tableName =>
  server.post(`/${tableName}`, (req, res) => {
    db.getRows(tableName, {}, (succ, result) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(result));
    });
  });

createResponseEndpoint("workers");
createResponseEndpoint("processes");
createResponseEndpoint("fuel");
createResponseEndpoint("raports");

server.listen(8080);
