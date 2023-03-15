var index = require("./index");

function log(data) {
  console.log("=============================================================");
  var d = new Date();
  console.log(d.toString());
  console.log(data);
  console.log("=============================================================");
}

// var db = index.connect("blog", ["post", "comment", "user", "trash","asdf"]);
// log(db);


// var db = index.xz();

