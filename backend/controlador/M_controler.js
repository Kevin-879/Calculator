const M_Model = require('../modelo/M_model.js');

class M_Controller {
  static calculate(req, res) {
    const { a, b } = req.body;
    const result = M_Model.calculate(a, b);
    res.json({ result });
  }
}

module.exports = M_Controller;