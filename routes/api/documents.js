const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Document = require("../../models/Document");

router.get("/", (req, res) => {
  Document.find()
    .sort({ date: -1 })
    .then(documents => res.json(documents));
});

router.post("/", auth, (req, res) => {
  const newDocument = new Document({
    title: req.body.title,
    body: req.body.body
  });

  newDocument.save().then(document => res.json(document));
});

router.delete("/:id", (req, res) => {
  Document.findById(req.params.id)
    .then(document => document.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
