require("./server.js");
const electron = require("electron");
const app = electron.app;
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

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    webPreferences: { nodeIntegration: true }
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
