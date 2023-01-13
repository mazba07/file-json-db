const fs = require("fs");

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

expFn.connect = function (path) {
    if (!path) {
        path = "database.json";
    }
    path = path.replace(/\\/g, "/");
    var parsedPath = require("path").parse(path);
    if (parsedPath.ext !== ".json") {
        path = path + ".json";
    }
    if (parsedPath.dir) {
        mkdirs(parsedPath.dir);
    }
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "{}");
    }
    return path;
}

module.exports = expFn;