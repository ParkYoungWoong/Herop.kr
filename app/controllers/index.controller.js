var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'INDEX PAGE',
        test: 'This is Herop code page! Hello World!'
    });
});