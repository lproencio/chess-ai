const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen(port, () => {
  console.log(`port is on: http://localhost:${port}`);
});
