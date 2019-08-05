const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Document = require("../../models/Document");
const User = require("../../models/User");

router.get("/", (req, res) => {
  Document.find()
    .sort({ date: -1 })
    .then(documents => {
      const retArr = [];
      documents.map((i) => {
        User.findById(i.author_id).then(user => {
          retArr.push({
            ...i._doc,
            id: i.id,
            title: i.title,
            body: i.body,
            date: i.date,
            author_id: i.author_id,
            name: user.name,
            email: user.email
          });
          if (retArr.length == documents.length) {
            retArr.sort((a, b) => b.date - a.date);
            res.json(retArr);
          }
        });
      });
    });
});

router.post("/", auth, (req, res) => {
  const newDocument = new Document({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    author_id: req.body.author_id,
  });

  newDocument.save().then(document => res.json({
   ...document._doc,
   email: req.body.author_email
  }));
});

router.delete("/:id", (req, res) => {
  Document.findById(req.params.id)
    .then(document => document.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
