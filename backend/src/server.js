const express = require("express");
const { connectToDatabase, pool, sql } = require("./utils/sqlConnection");
const { errorHandler } = require("./middleware/errorHandler");
const { tryCatch } = require("./utils/tryCatch");

const app = express();

app.get(
  "/api/veterinary",
  tryCatch(async (req, res) => {
    await connectToDatabase();

    const request = new sql.Request(pool);
    const result = await request.query("SELECT * FROM dbo.VeterinaryPractice");
    return res.json(result.recordset);
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});

app.use(errorHandler);
