var inde = require('./index');

function log(data) {
    console.log("=============================================================");
    var d = new Date();
    console.log(d.toString());
    console.log(data);
    console.log("=============================================================");
}

var db = inde.connect("blog", ["post", "comment"]);
log(db);

