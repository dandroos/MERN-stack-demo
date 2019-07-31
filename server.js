const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());

const db = process.env.MONGO_CONNECTION_STRING;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongo connected!"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/documents", require("./routes/api/documents"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/email", require("./routes/api/email"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
