var express = require("express");
var path = require("path");
var serveStatic = require('serve-static');
var app = express();
// hosting main page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});
app.use(express.static(__dirname));
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 80;
app.listen(port);
