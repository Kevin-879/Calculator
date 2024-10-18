const D_Model = require('../modelo/D_Model.js');

class D_Controller {
  static calculate(req, res) {
    const { a, b } = req.body;
    try {
      const result = D_Model.calculate(a, b);
      res.json({ result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = D_Controller;