var express = require('express');
var router = express.Router();
const model = require('../models');

/* GET tasks listing. */
router.get('/', function (req, res, next) {
  model.Task.findAll().then(data => {
    res.json({
      error: false,
      data: data
    });
  }).catch(err => {
    res.json({
      error: true,
      data: [],
      error: err
    });
  });
});

module.exports = router;