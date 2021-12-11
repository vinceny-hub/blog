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
  body2: {
    type: String
  },
  body3: {
    type: String
  },
  body4: {
    type: String
  },
  body5: {
    type: String
  },
  body7: {
    type: String
  },
  body8: {
    type: String
  },
  body9: {
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