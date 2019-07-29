const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());

const db = process.env.MONGO_CONNECTION_STRING;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected!"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/documents", require("./routes/api/documents"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
