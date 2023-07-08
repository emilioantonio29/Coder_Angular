import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  number = 1;
  hayError = true;
  myFontSize = '50px';
  arrayStudents = ['Emi2', 'Zun2', 'Jimmy2']
  status = 1;
  value = "";
  usuario = {
    name: "DefaultName",
    lastname: "DefaultLastname"
  }
  birthday= new Date();
  price = 2500.23;

  onSave = () =>{
    console.log(this.usuario)
  }

  changeValue = (data: string) =>{
    this.value = data;
  }

  changeError = () =>{
    this.hayError = !this.hayError;
  }

  onClick = (event: MouseEvent): void =>{
    console.log(event);
  }

  onInputChange = (event: Event): void =>{
    console.log(event);
    let html = event.target as HTMLInputElement;
    this.changeValue(html.toString());
  }

  constructor(){
    console.log("test")
    setInterval(()=>{
      this.number++;
    },1000)
  }
}
