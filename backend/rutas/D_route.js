const express = require('express');
const router = express.Router();
const D_Controller = require('../controlador/D_controler.js');

router.post('/division', D_Controller.calculate);

module.exports = router;