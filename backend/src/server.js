const express = require("express");
const { connectToMsqlDatabase, pool, sql } = require("./utils/sqlConnection");
const { errorHandler } = require("./middlewares/errorHandler");
const { tryCatch } = require("./utils/tryCatch");
const { logger } = require("./middlewares/logger");

const app = express();
app.use(express.json()); // needed for using req.body

const customerRouter = require("./routes/customers");

connectToMsqlDatabase();

app.use(logger);
app.use("/api/customer", customerRouter.router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
