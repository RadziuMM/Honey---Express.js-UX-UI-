const express = require("express");
const path = require("path");

const app = express();
// hosting main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.use(express.static(__dirname));

// hosting port
const port: number = 3000;
app.listen(port, () => {
  console.clear();
  console.log(`server is running at port : ${port}`);
});
