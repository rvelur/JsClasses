import Cliente from './classes/Cliente.js';
import Impuesto from './classes/Impuesto.js';

let impuestoRoberto = new Impuesto(1500, 500)
let impuestoJose = new Impuesto(2500, 500)

let roberto = new Cliente('Roberto', impuestoRoberto)
let jose = new Cliente('jose', impuestoJose)



console.log(roberto.calcularImpuesto())
console.log(jose.calcularImpuesto())

