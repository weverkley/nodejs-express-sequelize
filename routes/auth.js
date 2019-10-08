var express = require('express');
var router = express.Router();
const model = require('../models');

router.post('/signin', function (req, res, next) {
  const {
    email,
    password
  } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: true,
      data: [],
      message: 'Request missing email or password param.'
    });
  }

  model.User.findOne({
    where: {
      'email': email,
      'password': password
    }
  }).then(data => {
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

router.post('/signup', function (req, res, next) {
  model.User.findAll().then(data => {
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