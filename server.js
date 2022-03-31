require("dotenv").config();
const log = require("debug")("fruits:server");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override")
const fruitsController = require("./controllers/fruits");
const usersController = require("./controllers/UsersController");

// eslint-disable-next-line no-undef
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {}, () => {
    log("connected to mongodb");
});
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 2000;

app.use(morgan("tiny"));
app.use(
  session({
    secret: "iamsimon",
    resave: false,
    saveUninitialized: false
  })
);
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use("/fruits", fruitsController);
app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
  log("express started on " + PORT);
});

