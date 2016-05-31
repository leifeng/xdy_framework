var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('static'));

// test
app.get('/abc', function (req, res) {
  res.json([
    {
      id: 1,
      name: "oooo name 1",
      price: 100
    },
    {
      id: 2,
      name: "oooo name 2",
      price: 100
    }, {
      id: 3,
      name: "oooo name 2",
      price: 100
    }, {
      id: 4,
      name: "oooo name 2",
      price: 100
    }])
});
app.delete('/abc/:id',function(req,res){
    console.log(req.param('id'))
    res.json([
    {
      id: 1,
      name: "oooo name 1",
      price: 100
    }])
})
// !test
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});