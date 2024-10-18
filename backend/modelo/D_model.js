class D_Model {
    static calculate(a, b) {
      if (b === 0) {
        throw new Error('No se puede dividir por 0');
      }
      return a / b;
    }
}
  
module.exports = D_Model;