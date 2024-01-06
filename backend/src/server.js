const express = require("express");
const { connectToMsqlDatabase, pool, sql } = require("./utils/sqlConnection");
const { errorHandler } = require("./middlewares/errorHandler");
const { logger } = require("./middlewares/logger");

const app = express();
app.use(express.json()); // needed for using req.body

const customerRouter = require("./routes/customers");
const petRouter = require("./routes/pets");
const veterinaryPracticeRouter = require("./routes/veterinaryPractices");

connectToMsqlDatabase();

app.use(logger);
app.use("/api/customer", customerRouter.router);
app.use("/api/pet", petRouter.router);
app.use("/api/veterinary_practice", veterinaryPracticeRouter.router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
