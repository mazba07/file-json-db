const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
var getAllData = require("./getAllData");

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

function lionTest() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
}

// function setTable(path, table) {
//     var str = {
//         "post": {
//             "p1": {
//                 "title": "Hello1",
//                 "body": "worls1"
//             },
//             "p2": {
//                 "title": "Hello2",
//                 "body": "worls2"
//             },
//             "p3": {
//                 "title": "Hello3",
//                 "body": "worls3"
//             }
//         },
//         "comment": {
//             "c1": {
//                 "title": "Hello1",
//                 "body": "worls1"
//             },
//             "c2": {
//                 "title": "Hello2",
//                 "body": "worls2"
//             },
//             "c3": {
//                 "title": "Hello3",
//                 "body": "worls3"
//             }
//         }
//     };
//     fs.writeFileSync(path, JSON.stringify(str, null, 4));
//     var arrData = getAllData.gelAllJsonData(path);
//     var arrDataObj = JSON.parse(arrData);

//     str.user = {};

//     for (let table in str) {
//         // var newTable = {
//         //     "user": {}
//         // };

//     }

//     var newPost = {
//         "title": "Hello4",
//         "body": "worls4"
//     }

//     var p3 = "p3";
//     str.user.p3 = newPost;
//     console.log(str);
// }

function onlyLettersAndNumbers(str) {
  return Boolean(str.match(/^[A-Za-z0-9]*$/));
}

function setTable(path, table) {
  //   var arrData = getAllData.gelAllJsonData(path);
  //   var allExistingTable = [];
  //   for (let item in arrData) {
  //     allExistingTable.push(item);
  //   }
  //   var tableOfDb = [];
  //   for (let item of table) {
  //     if (!allExistingTable.includes(item)) {
  //       tableOfDb.push(item);
  //     }
  //   }
  //   fs.writeFileSync(path, JSON.stringify(tableOfDb, null, 4));
  //   console.log(allExistingTable);
}

expFn.connect = function (path, table) {
  if (!path) {
    console.log("File-json-db Error: Database name required.");
    return false;
  }
  if (!onlyLettersAndNumbers(path)) {
    console.log(
      "File-json-db Error: Database name must be only Letters And Numbers A-Z a-z 0-9. " +
        path +
        " is an invalid name."
    );
    return false;
  }

  if (table === undefined || table.length == 0) {
    console.log(
      "File-json-db Error: At least one table name required. Follow example."
    );
    return false;
  }
  if (Array.isArray(table)) {
    for (let item of table) {
      if (!onlyLettersAndNumbers(item)) {
        console.log(
          "File-json-db Error: Table name must be only Letters And Numbers A-Z a-z 0-9. " +
            item +
            " is an invalid name."
        );
        return false;
      }
    }
  } else {
    console.log(
      "File-json-db Error: Table name will be an array. Follow example."
    );
    return false;
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

  setTable(path, table);

  var data = {
    path: path,
    table: table,
  };

  return data;
};

module.exports = expFn;
