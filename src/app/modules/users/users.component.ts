import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectableListComponent } from 'src/app/components/selectable-list/selectable-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {

    console.log(this.myDiv)

  }

  students = [
    {name: "emilio", lastname: "martinez", grade: 9},
    {name: "luis", lastname: "perez", grade: 3},
    {name: "zun", lastname: "barreto", grade: 10},
    {name: "john", lastname: "ramirez", grade: 6},
    {name: "jimmy", lastname: "gonzalez", grade: 5},
    {name: "anthony", lastname: "gomez", grade: 1},
    {name: "lara", lastname: "kroft", grade: 8},
    {name: "cris", lastname: "jedi", grade: 7},
    {name: "carla", lastname: "sosa", grade: 2}
  ]

  @ViewChild('viewChildExample') myDiv?:ElementRef<HTMLDivElement>;

  // Con componentes
  @ViewChild(SelectableListComponent) list?: SelectableListComponent;

  // interval = setInterval(()=>{
  //   console.log("setInterval Test")
  // },1000)

  alertUser(user:string): void{
    alert(user);
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log("this.myDiv", this.myDiv?.nativeElement.innerText)
    console.log("list", this.list)
  }

  ngOnDestroy(): void { 
    // clearInterval(this.interval);
  }

}
