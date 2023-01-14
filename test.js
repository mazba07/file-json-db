var inde = require('./index');

var db = inde.connect("blog", ["post","comment"]);

console.log(db);