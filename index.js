// var db = require('diskdb');
// db = db.connect('/examples/db', ['articles']);
// db.connect('/examples/db', ['articles']);

const fs = require("fs");
var uniqid = require('uniqid');

expFn = {};

function mkdirs(dirs) {
    const paths = dirs.split("/");
    let current = "";
    paths.forEach((p) => {
        current += `${p}/`;
        if (!fs.existsSync(current)) {
            fs.mkdirSync(current);
        }
    });
}

expFn.connect = function (path, compact) {
    if (!path)
        path = "database.json";
    path = path.replace(/\\/g, "/");
    let parsedPath = require("path").parse(path);
    if (parsedPath.ext !== ".json") path = path + ".json";
    if (parsedPath.dir) mkdirs(parsedPath.dir);
    if (!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    this.path = path;
    this.compact = compact === undefined ? true : compact;
}


module.exports = expFn;