"use strict";
console.log("hello world");
function saludar(nombre) {
    console.log("hola " + nombre);
}
function despedirse(fn) {
    console.log("test");
}
despedirse(function () { });
function despedirse2(fn) {
    console.log("test");
}
// despedirse2(function(){})
// despedirse2(()=>"4")
despedirse2(function () { return 4; });
despedirse2(function () { return 5; });
// VARIABLES:
var cantidadAlumnos = 1;
var nombreAlumno = "Emilio";
var alumnos = ["Zun", "Emilio"];
var alumnosMasNotas = ["Zun", 1, "Emilio", 1];
var alumnosMasNotas2 = ["Zun", 1, "Emilio", 1];
//alumnosMasNotas = [bool]; // error: no soporta bool
var productos; // interfaz: el objeto tiene que cumplir con lo que la interfaz solicita
productos = ["test1", "test2"];
var tester = "test";
// OBJETOS:
var carrito = {
    productos: [],
    total: 0,
    agregarProducto: function (productos) { },
};
var usuario = {
    nombre: "Emilio",
    apellido: "Martinez",
    edad: 1,
};
function saludarUsuario(usuario) {
    console.log(usuario);
}
function saludarUsuario2(usuario) {
    console.log(usuario.email);
}
saludarUsuario(usuario);
saludarUsuario2(usuario);
var heroe = {
    nombre: "string",
    apellido: "string",
    edad: 2,
    poderes: []
};
function saludarUsuario3(heroe) {
    console.log(heroe.poderes);
}
var respuestaProducto = {
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [
        {
            id: 1,
            email: "string",
            fisrt_name: "string",
            last_name: "string",
            avatar: "string"
        },
        {
            id: 2,
            email: "string2",
            fisrt_name: "string2",
            last_name: "string2",
            avatar: "string2"
        }
    ]
};
var motocicleta = {
    cantidadRuedas: 2,
    color: "verde",
    esMotorizado: true,
    marca: "string"
};
var camion = {
    cantidadRuedas: 4,
    color: "amarillo",
    esMotorizado: true,
    marca: "string2"
};
// CLASS
var Vehiculo = /** @class */ (function () {
    function Vehiculo(cantidadRuedas, color, esMotorizado, marca) {
        if (marca === void 0) { marca = "Sin Marca"; }
        this.cantidadRuedas = cantidadRuedas;
        this.color = color;
        this.esMotorizado = esMotorizado;
        this.marca = marca;
    }
    return Vehiculo;
}());
var limosina = new Vehiculo(1, "verde", true, "Mercedes");
console.log(limosina);
var limosina2 = new Vehiculo(2, "verde", true);
console.log(limosina2);
// CLASS: Con modificador de acceso. Definen si las propiedades seran publicas, privadas o protegidas y si seran accesibles desde afuera de la clase
var VehiculoClass = /** @class */ (function () {
    function VehiculoClass(cantidadRuedas, color, esMotorizado, marca) {
        this.cantidadRuedas = cantidadRuedas;
        this.color = color;
        this.esMotorizado = esMotorizado;
        this.marca = marca;
    }
    VehiculoClass.prototype.changeColor = function (esMotorizado) {
        this.esMotorizado = esMotorizado;
    };
    return VehiculoClass;
}());
var tractor = new VehiculoClass(1, "verde", true, "Pool");
