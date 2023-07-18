import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// interface UserModel {
//   email: FormControl<string | null>;
//   password: FormControl<string | null>;
//   city: FormControl<string | null>;
// }

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  /* INSTANCIA DE CADA CONTROL */

  emailControl = new FormControl("", [Validators.required]);
  passwordControl = new FormControl();
  cityControl = new FormControl();

  userModel = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    city: this.cityControl,
  })

  /* INSTANCIA DEL FORM CON INYECCION DE DEPENDENCIAS */
  // constructor(private fb: FormBuilder){ 
  //   this.userModel = this.fb.group({
  //     email: [""],
  //     password: [""],
  //     city: [""]
  //   });
  //   console.log("this.userModel", this.userModel)
  // }

  onSubmit(){
    console.log(this.userModel);
  }

  ngOnInit(): void {
  }

}
