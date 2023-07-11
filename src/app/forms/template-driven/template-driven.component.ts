import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userModel = {
    email: "",
    password: "",
    addresses: [
      {address: ""},
      {address: ""}
    ],
    city: "",
    state: "",
    zip: "",
    check: false
  }

  onSubmit(){
    if(this.userModel.email === "" || this.userModel.password === "" || this.userModel.addresses[0].address === ""){
      alert("Los campos EMAIL, PASSWORD y PRIMERA DIRECCION son obligatorios")
    }
    else if(!this.userModel.check){
      alert("Por favor acepta los términos y condiciones")
    }
     else{
      alert("Datos enviados correctamente. En breve te llegará un mail con la confirmación")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
