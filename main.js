// impuestos
class Impuestos{
    constructor(montoBrutoanual, deducciones){
        this._montoBrutoanual = montoBrutoanual;
        this._deducciones = deducciones;
    }

    get montoBrutoanual(){
        return this._montoBrutoanual
    }

    set montoBrutoanual(value){
        this._montoBrutoanual = value
    }

    get deducciones(){
        return this._deducciones
    }

    set deducciones(value){
        this._deducciones = value
    }
};

// clientes
class Cliente {
    constructor (nombre, impuesto){

        // Intento de advertencia de que nombre tiene que ser un String
        // if (this._nombre != typeof String){
        //     console.warn ("Debes ingresar el texto de una persona")
        // }

        // Intento de advertencia de que los valores de impuesto deben ser Numeros
        // if (this._impuesto != typeof Number){
        //     console.warn ("Los impuestos deben se valores númericos")
        // }

        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombreCliente(){
        return this._nombre
    }

    set nombreCliente(nuevoNombrecliente){
        this._nombre = nuevoNombrecliente
    }

    calcularImpuesto(){
        // AQUI VA EL CALCULO DEL IMPUESTO ((monto_bruto_anual - deducciones) * 21%)
        // ((Impuesto._montoBrutoanual - Impuesto._deducciones) * 0.21)
        const resultadoResta = this._impuesto.montoBrutoanual - this._impuesto.deducciones
        return (resultadoResta * 0.21);
    }
}

// agregar a clase Impuestos
const impuestosDeAlejandro = new Impuestos (355, 35);
const impuestosDeJuan = new Impuestos (543, 54);

// agregar a clase Cliente
const clienteAlejandro = new Cliente ("Alejandro", impuestosDeAlejandro);
const clienteJuan = new Cliente ("Juan", impuestosDeJuan);

const calcularAlejandro = clienteAlejandro.calcularImpuesto();
const calcularJuan = clienteJuan.calcularImpuesto();

console.log(`El impuesto anual de ${clienteAlejandro.nombreCliente} es ${calcularAlejandro}`);
console.log(`El impuesto anual de ${clienteJuan.nombreCliente} es ${calcularJuan}`);