"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoanual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._montoBrutoanual = montoBrutoanual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "montoBrutoanual",
    get: function get() {
      return this._montoBrutoanual;
    },
    set: function set(value) {
      this._montoBrutoanual = value;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(value) {
      this._deducciones = value;
    }
  }]);

  return Impuestos;
}();

; // clientes

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

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

  _createClass(Cliente, [{
    key: "nombreCliente",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombrecliente) {
      this._nombre = nuevoNombrecliente;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      // AQUI VA EL CALCULO DEL IMPUESTO ((monto_bruto_anual - deducciones) * 21%)
      // ((Impuesto._montoBrutoanual - Impuesto._deducciones) * 0.21)
      var resultadoResta = this._impuesto.montoBrutoanual - this._impuesto.deducciones;
      return resultadoResta * 0.21;
    }
  }]);

  return Cliente;
}(); // agregar a clase Impuestos


var impuestosDeAlejandro = new Impuestos(355, 35);
var impuestosDeJuan = new Impuestos(543, 54); // agregar a clase Cliente

var clienteAlejandro = new Cliente("Alejandro", impuestosDeAlejandro);
var clienteJuan = new Cliente("Juan", impuestosDeJuan);
var calcularAlejandro = clienteAlejandro.calcularImpuesto();
var calcularJuan = clienteJuan.calcularImpuesto();
console.log("El impuesto anual de ".concat(clienteAlejandro.nombreCliente, " es ").concat(calcularAlejandro));
console.log("El impuesto anual de ".concat(clienteJuan.nombreCliente, " es ").concat(calcularJuan));
