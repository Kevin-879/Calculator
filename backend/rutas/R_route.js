const express = require('express');
const router = express.Router();
const R_Controller = require('../controlador/R_controler.js');

router.post('/resta', R_Controller.calculate);

module.exports = router;