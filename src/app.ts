const express = require("express");
const path = require("path");
const serveStatic = require('serve-static');

const app = express();
// hosting main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.use(express.static(__dirname));


app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
