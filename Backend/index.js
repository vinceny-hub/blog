const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3300;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('././config/db.config');
const postRoute = require('./post.route');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors()) ;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/posts', postRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});