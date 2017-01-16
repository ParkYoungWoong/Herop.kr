var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/test', router);
};

router.get('/', function (req, res, next) {
  res.render('test', {
    title: 'HEROP CODE'
  });
});