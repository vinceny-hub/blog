const express = require('express');
const postRoutes = express.Router();

// const auth = require('../middleware/auth');
const multer = require('./middleware/multer-config');

// Require Post model in our routes module
let Post = require('./post.model');

// Defined store route
postRoutes.route('/add', multer,).post(function (req, res) {
  let post = new Post(req.body)({
  // const thing = new Thing({
    ...post,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// exports.createThing = (req, res, next) => {
//   const thingObject = JSON.parse(req.body);
//   delete thingObject._id;
//   const thing = new Thing({
//     ...thingObject,
//     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//   });
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// };

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Post.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

postRoutes.route('/post/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});


//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.body2 = req.body.body2;
        post.body3 = req.body.body3;
        post.body4 = req.body.body4;
        post.body5 = req.body.body5;
        post.body6 = req.body.body6;
        post.body7 = req.body.body7;
        post.body8 = req.body.body8;
        post.body9 = req.body.body9;
        post.body10 = req.body.body10;
        post.body11 = req.body.body11;
        post.body12 = req.body.body12;
        post.body13 = req.body.body13;
        post.body14 = req.body.body14;
        post.body15 = req.body.body15;
        post.body16 = req.body.body16;
        post.body17 = req.body.body17;
        post.body18 = req.body.body18;
        post.body19 = req.body.body19;
        post.body20 = req.body.body20;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;