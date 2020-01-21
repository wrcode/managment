require("./server.js");
const electron = require("electron");
const { app, protocol } = require("electron");
const BrowserWindow = electron.BrowserWindow;
const db = require("electron-db");
const path = require("path");
const url = require("url");
const location = path.join(__dirname, "database");

let mainWindow;

function createDatabse() {
  db.createTable("workers", location, (succ, msg) => {});
  db.createTable("processes", location, (succ, msg) => {});
  db.createTable("fuel", location, (succ, msg) => {});
  db.createTable("raports", location, (succ, msg) => {});
}

function createWindow() {
  createDatabse();

  const DATABASE = "database";
  const PROTOCOL = "file";

  electron.protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    // // Strip protocol
    let url = request.url.substr(PROTOCOL.length + 1);

    // Build complete path for node require function
    url = path.join(__dirname, DATABASE, url);

    // Replace backslashes by forward slashes (windows)
    // url = url.replace(/\\/g, '/');
    url = path.normalize(url);

    console.log(url);
    callback({ path: url });
  });

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });
  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("browser-window-created", function(e, window) {
  window.setMenu(null);
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
