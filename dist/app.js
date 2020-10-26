var express = require("express");
var path = require("path");
var app = express();
// hosting main page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});
app.use(express.static(__dirname));
// hosting port
var port = 3000;
app.listen(port, function () {
    console.clear();
    console.log("server is running at port : " + port);
});
