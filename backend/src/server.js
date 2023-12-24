const express = require("express");
const { getSqlObject } = require("./utils/sqlConnection");

const app = express();
const sql = getSqlObject();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
