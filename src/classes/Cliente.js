export default class Cliente {
    constructor (nombre, impuesto){
        this._nombre = nombre;
        this.impuesto = impuesto;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre (newNombre){
        let nombreValue = String(newNombre)
        this._nombre = nombreValue;
    }


    calcularImpuesto (){
        return (`El impuesto total a pagar de ${this._nombre} es: 
        ${(this.impuesto.montoBruto - this.impuesto.deducciones)}
        `);
    }
}

// let roberto = new Cliente('Roberto', '10')
// let jose = new Cliente('jose', '15')

// console.log(roberto.calcularImpuesto())
// console.log(jose.calcularImpuesto())