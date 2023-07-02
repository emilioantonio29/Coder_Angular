console.log("hello world");

function saludar(nombre:string): void{
    console.log(`hola ${nombre}`)
}

function despedirse(fn: () => void): void{
    console.log("test");
}

despedirse(function(){})

function despedirse2(fn: () => number): void{
    console.log("test");
}

// despedirse2(function(){})

// despedirse2(()=>"4")

despedirse2(() => 4)
despedirse2(()=>5)

// VARIABLES:

let cantidadAlumnos:number = 1;
let nombreAlumno:string = "Emilio";
let alumnos:string[] = ["Zun", "Emilio"];
let alumnosMasNotas:(string | number)[] = ["Zun", 1, "Emilio", 1];
let alumnosMasNotas2: any[] = ["Zun", 1, "Emilio", 1];
//alumnosMasNotas = [bool]; // error: no soporta bool
let productos: Array<string>; // interfaz: el objeto tiene que cumplir con lo que la interfaz solicita
productos = ["test1", "test2"];
const tester: string = "test";


// OBJETOS:

let carrito = {
    productos: [],
    total: 0,
    agregarProducto(productos: any){},
}

let usuario = {
    nombre: "Emilio",
    apellido: "Martinez",
    edad: 1,
}

function saludarUsuario(usuario: object | {}){
    console.log(usuario)
}

interface Usuario {
    nombre: string;
    apellido: string;
    edad: number;
    email?: string;
}

function saludarUsuario2(usuario: Usuario){
    console.log(usuario.email)
}

saludarUsuario(usuario);

saludarUsuario2(usuario);

// HERENCIA

interface SuperHeroe extends Usuario{
    poderes: Array<string | number>;
}

let heroe:SuperHeroe ={
    nombre: "string",
    apellido: "string",
    edad: 2,
    poderes: []
}

function saludarUsuario3(heroe: SuperHeroe){
    console.log(heroe.poderes)
}

// GENERICOS

interface ApiUser {
    id: number;
    email: string;
    fisrt_name: string;
    last_name: string;
    avatar: string;
}

interface Producto {
    nombre: string;
    precio: number;
}

interface RespuestListado<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[]
}

const respuestaProducto: RespuestListado<ApiUser> = {
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
}

// CLASES

// I
interface IVehiculo {
    cantidadRuedas: number;
    color: string;
    esMotorizado: boolean;
    marca: string;
}

let motocicleta:IVehiculo={
    cantidadRuedas: 2,
    color: "verde",
    esMotorizado: true,
    marca: "string"
}

let camion:IVehiculo={
    cantidadRuedas: 4,
    color: "amarillo",
    esMotorizado: true,
    marca: "string2"
}

// CLASS
class Vehiculo {
    cantidadRuedas: number;
    color: string;
    esMotorizado: boolean;
    marca?: string;

    constructor(
        cantidadRuedas: number,
        color: string,
        esMotorizado: boolean,
        marca: string = "Sin Marca"
    ){
        this.cantidadRuedas = cantidadRuedas;
        this.color = color;
        this.esMotorizado = esMotorizado;
        this.marca = marca;
    }
}


const limosina = new Vehiculo(1,"verde", true, "Mercedes");
console.log(limosina);

const limosina2 = new Vehiculo(2,"verde", true);
console.log(limosina2);

// CLASS: Con modificador de acceso. Definen si las propiedades seran publicas, privadas o protegidas y si seran accesibles desde afuera de la clase

class VehiculoClass {
    constructor(
        public cantidadRuedas: number,
        public color: string,
        private esMotorizado: boolean,
        public readonly marca?: string,
    ){}



    changeColor(esMotorizado:boolean){
        this.esMotorizado = esMotorizado;
    }
}

const tractor = new VehiculoClass(1,"verde", true, "Pool")
