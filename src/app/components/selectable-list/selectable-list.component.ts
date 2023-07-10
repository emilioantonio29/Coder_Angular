import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

interface IStudent{
  name: string;
  lastname: string;
  grade: number
}

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent implements OnInit {

  @Input() studentList: IStudent[] = [];

  @Output()
  onSelect = new EventEmitter();

  @Output()
  studentListChange = new EventEmitter();

  // Solo borra los items en array que llegó al hijo, no los borra en el componente.
  removeStudent(index: number): void{
    this.studentList = this.studentList.filter((obj, i)=> i !== index);
  }

  // Borra los items en el parent.
  removeStudentParent(index: number): void{
    this.studentListChange.emit(
      this.studentList = this.studentList.filter((obj, i)=> i !== index)
      )
  }

  constructor() {}

  ngOnInit(): void {
  }

}
