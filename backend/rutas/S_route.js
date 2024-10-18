const express = require('express');
const router = express.Router();
const S_Controller = require('../controlador/S_controler.js');

router.post('/suma', S_Controller.calculate);

module.exports = router;