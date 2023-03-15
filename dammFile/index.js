// var db = require('diskdb');
// db = db.connect('examples/db', ['articles']);
// db.connect('/examples/db', ['articles']);

var connect = require("./ardor/connect");

expFn = {};

var dbName = {
  x: "",
  get getDbName() {
    return this.x;
  },
  set setDbName(value) {
    this.x = value;
  },
};

var tableName = {
  x: "",
  get getTableName() {
    return this.x;
  },
  set setTableName(value) {
    this.x = value;
  },
};

// ==========

expFn.connect = function (path, table) {
  var pathTable = connect.connect(path, table);
  dbName.setDbName = pathTable.path;
  tableName.setTableName = pathTable.table;
  return pathTable;
};

expFn.xz = async function () {
  var x = await connect.lionTest();
  return x;
};

module.exports = expFn;
