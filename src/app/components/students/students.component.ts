import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
