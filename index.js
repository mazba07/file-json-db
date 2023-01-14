// var db = require('diskdb');
// db = db.connect('examples/db', ['articles']);
// db.connect('/examples/db', ['articles']);

const fs = require("fs");
var uniqid = require('uniqid');

var connect = require("./ardor/connect");

expFn = {};

expFn.connect = function (path, table) {
    var pathTable = connect.connect(path, table);
    return pathTable;
}


module.exports = expFn;