const express = require("express");
const mongoose = require("mongoose");

const app = express();
const path = require("path");

//Middleware
app.use(express.json());

const db = process.env.MONGO_CONNECTION_STRING;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Mongo connected!"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/documents", require("./routes/api/documents"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/email", require("./routes/api/email"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
