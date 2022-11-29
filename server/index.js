const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./src/routes/index.routes");

const app = express();

//(MIDDLEWARES)
app.use(cors());
//(SHOW ROUTES)
app.use(morgan("dev"));
//(JSON)-parser
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//(ROUTES)
app.use("/api", routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`%listen on port ${PORT}`);
});
