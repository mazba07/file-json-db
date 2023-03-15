const fs = require("fs");

expFn = {};

expFn.gelAllJsonData = function (path) {
    try {
        var data = fs.readFileSync(path);
        var arrDataObj = JSON.parse(data);
        return arrDataObj;
    } catch {
        return console.log("File-json-db Error: Failed to get data from database. This may be because the JSON could not be parsed correctly.");
    }
}

module.exports = expFn;