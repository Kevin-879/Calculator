const express = require('express');
const router = express.Router();
const M_Controller = require('../controlador/M_controler.js');

router.post('/multiplicacion', M_Controller.calculate);

module.exports = router;