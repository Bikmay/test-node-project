const mailer = require('nodemailer');

import * as myModule from './public/javascripts/mailer.js';
import { main } from '../public/javascripts/mailer.js';
var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");``
/* GET home page. */


router.get('/', function(req, res, next) {



// async..await is not allowed in global scope, must use a wrapper
 main();
  res.render('index', { title: 'Express' });
});

module.exports = router;
