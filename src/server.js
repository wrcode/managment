const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("electron-db");
const server = express();
const path = require("path");
const fs = require("fs");
const Busboy = require("busboy");
const HttpStatus = require("http-status-codes");
const morgan = require("morgan");

server.use(cors());
server.use(morgan("combined"));
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

      case "edit":
        db.search(tableName, location, "id", body.id, (succ, data) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(...data));
        });

        break;

      case "update":
        db.updateRow(
          tableName,
          location,
          { id: body.id },
          body,
          (succ, data) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          }
        );

        break;
    }
  });
};

server.post("/image", (req, res) => {
  const fileNameNew = `${Date.now()}.jpg`;
  var busboy = new Busboy({
    headers: req.headers
  });

  busboy.on("file", function(fieldname, file) {
    file.pipe(
      fs.createWriteStream(
        path.join(__dirname, "./database/images", fileNameNew)
      )
    );
  });
  busboy.on("finish", function() {
    res.writeHead(HttpStatus.OK, {
      Connection: "close"
    });

    res.end(JSON.stringify({ fileName: fileNameNew }));
  });
  return req.pipe(busboy);
});

server.post("/img", function(req, res) {
  res.setHeader("Content-Type", "image/jpg");
  res.sendFile(path.join(__dirname, "./database/images", req.body.image));
});

createEndpoint("workers");
createEndpoint("processes");
createEndpoint("fuel");
createEndpoint("raports");
createEndpoint("advances");
createEndpoint("documents");

server.listen(8080);
