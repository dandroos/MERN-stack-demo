const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// const User = require("../../models/User");

// router.post("/:id", auth, (req, res) => {
//   //check auth id and params id match here

//   User.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       email: req.body.email
//     },
//     (err, res) => {
//       // what to do after?
//     }
//   );


module.exports = router;
