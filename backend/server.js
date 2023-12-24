const express = require("express");
const { connectSql } = require("./sqlConnection");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
