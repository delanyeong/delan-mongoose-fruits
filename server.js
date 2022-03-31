require("dotenv").config();
const log = require("debug")("fruits:server");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override")
const fruitsController = require("./controllers/fruits");
const usersController = require("./controllers/UsersController");

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {}, () => {
    log("connected to mongodb");
});
const app = express();
const PORT = process.env.PORT ?? 2000;

app.use(morgan("tiny"));
app.use(
  session({
    secret: "iamsimon", //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
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









//Last Sat - After

// require("dotenv").config();
// const log = require("debug")("fruits:server");
// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const methodOverride = require("method-override")
// const fruitsController = require("./controllers/fruits.js");

// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI, {}, () => {
//     log("connected to mongodb");
// });
// const app = express();
// const PORT = process.env.PORT ?? 2000;

// app.use(morgan("tiny"));
// app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: false }));
// app.use("/fruits", fruitsController);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


// app.listen(PORT, () => {
//   log("express started on " + PORT);
// });

// Last Sat - Before

// require("dotenv").config();
// const log = require("debug")("fruits:server");
// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const methodOverride = require("method-override")
// const Fruit = require("./models/Fruit");


// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI, {}, () => {
//   log("connected to mongodb");
// });
// const app = express();
// const PORT = process.env.PORT ?? 2000;

// app.use(morgan("tiny"));
// app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/fruits/seed", async (req, res) => {
//   try {
//     await Fruit.deleteMany({})
//     await Fruit.create([
//       {
//         name: "grapefruit",
//         colour: "pink",
//         readyToEat: true,
//       },
//       {
//         name: "grape",
//         colour: "purple",
//         readyToEat: false,
//       },
//       {
//         name: "avocado",
//         colour: "green",
//         readyToEat: true,
//       },
//     ]);
//     res.redirect("/fruits");
//   } catch (error) {
//     log(error);
//   }
// });

// //* New Route
// app.get("/fruits/new", (req, res) => {
//   res.render("new.ejs");
// });

// //* Index Route
// app.get("/fruits", (req, res) => {
//   Fruit.find({}, (err, fruits) => {
//     log("fruits: %o", fruits);
//     res.render("fruits/index.ejs", { fruits });
//   });
// });

// //* Create Route
// app.post("/fruits", (req, res) => {
//   if (req.body.readyToEat === "on") {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }

//   const fruit = new Fruit(req.body);
//   fruit.save();
//   res.redirect("/fruits");
// });

// //* Show Route
// app.get("/fruits/:id", (req, res) => {
//   Fruit.findById(req.params.id, (err, fruit) => {
//     res.render("fruits/show.ejs", { fruit });
//   });
// });

// app.delete("/fruits/:id", async (req, res) => {
//     try {
//         await Fruit.findByIdAndDelete(req.params.id)
//         res.redirect("/fruits")
//     } catch (error) {
//         res.send(404)
//     }
// })

// app.get("/fruits/:id/edit", async (req, res) => {
//     const fruit = await Fruit.findById(req.params.id)
//     res.render("fruits/edit.ejs", { fruit })
// })

// app.put("/fruits/:id", async (req, res) => {
//     if (req.body.readyToEat === "on") {
//         req.body.readyToEat = true;
//       } else {
//         req.body.readyToEat = false;
//       }
//     try {
//         const fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, {new : true})
//         res.redirect("/fruits")
//     } catch (error) {
//         res.send(404)
//     }
// })

// app.listen(PORT, () => {
//   log("express started on " + PORT);
// });

