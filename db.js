const sqlite = require("sqlite3");

const db = new sqlite.Database("./db.sqlite");

module.exports = db;
