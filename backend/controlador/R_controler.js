const R_Model = require('../modelo/R_Model.js');

class R_Controller {
  static calculate(req, res) {
    const { a, b } = req.body;
    const result = R_Model.calculate(a, b);
    res.json({ result });
  }
}

module.exports = R_Controller;