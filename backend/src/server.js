const express = require("express");
const { connectToMsqlDatabase, pool, sql } = require("./utils/sqlConnection");
const { errorHandler } = require("./middleware/errorHandler");
const { tryCatch } = require("./utils/tryCatch");
const { logger } = require("./middleware/logger");

const app = express();
app.use(express.json()); // needed for using req.body

const customerRouter = require("./routes/customers");

connectToMsqlDatabase();

app.use(logger);

app.use("/api/customer", customerRouter.router);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});

app.use(errorHandler);
