const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validate

  if (!email || !password) {
    return res.status(400).json({ msg: "Please complete all fields." });
  }

  // Check for existing user

  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        {
          id: user.id
        },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
