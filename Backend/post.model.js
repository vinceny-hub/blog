const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  body02: {
    type: String
  },
  body03: {
    type: String
  },
  body04: {
    type: String
  },
  body05: {
    type: String
  },
  body07: {
    type: String
  },
  body08: {
    type: String
  },
  body09: {
    type: String
  },
  body10: {
    type: String
  },
  body11: {
    type: String
  },
  body12: {
    type: String
  },
  body13: {
    type: String
  },
  body14: {
    type: String
  },
  body15: {
    type: String
  },
  body16: {
    type: String
  },
  body17: {
    type: String
  },
  body18: {
    type: String
  },
  body19: {
    type: String
  },
  body20: {
    type: String
  },
},
{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);