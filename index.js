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
//despedirse2(function(){})
// despedirse2(()=>"4")
despedirse2(function () { return 4; });
despedirse2(function () { return 5; });
