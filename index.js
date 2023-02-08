// var db = require('diskdb');
// db = db.connect('examples/db', ['articles']);
// db.connect('/examples/db', ['articles']);

const fs = require("fs");
var uniqid = require('uniqid');
var connect = require("./ardor/connect");

expFn = {};

var dbname = {
    x: "",
    get getDbname() {
        return this.x;
    },
    set setDbname(value) {
        this.x = value;
    }
};

var tableName = {
    x: "",
    get getTableName() {
        return this.x;
    },
    set setTableName(value) {
        this.x = value;
    }
};

// ==========


expFn.connect = function (path, table) {
    var pathTable = connect.connect(path, table);
    dbname.setDbname = pathTable.path;
    tableName.setTableName = pathTable.table;
    return "connect";
}



module.exports = expFn;