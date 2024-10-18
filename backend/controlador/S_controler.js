const S_Model = require('../modelo/S_Model.js');

class S_Controller {
  static calculate(req, res) {
    const { a, b } = req.body;
    const result = S_Model.calculate(a, b);
    res.json({ result });
  }
}

module.exports = S_Controller;