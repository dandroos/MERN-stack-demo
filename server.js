const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

//Middleware
app.use(express.json());

// Bring in the connection string from the config file
const db = config.get("mongoConnectionString");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected!"))
  .catch(err => console.log(err));

// Routes
app.use("/api/documents", require("./routes/api/documents"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
