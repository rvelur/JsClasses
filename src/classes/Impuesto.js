export default class Impuesto {
    constructor (montoBruto, deducciones){
        this._montoBruto = montoBruto;
        this._deducciones = deducciones;
    }

    get montoBruto() {
        return this._montoBruto;
    }

    get deducciones(){
        return this._deducciones;
    }

    set montoBruto(newMontoBruto){
        this._montoBruto = newMontoBruto;
    }

    set deducciones(newDeducciones){
        this._deducciones = newDeducciones;
    }
    
//     calcularImpuesto(){
//         let impuesto = this._montoBruto - this._deducciones;
//         return impuesto;
//     }
}