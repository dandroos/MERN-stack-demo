const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// a very basic example
const DocumentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author_id: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// DocumentSchema.set('toJSON', {
//   virtuals: true
// })

module.exports = Document = mongoose.model("post", DocumentSchema);
