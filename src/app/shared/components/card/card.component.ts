import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  title: string = "Card Title";

  @Input()
  description: string | undefined;

  @Input()
  img: string = "";

  @Input()
  alt: string = "";

  @Input()
  severity: string = "";

  @Input()
  clickable = false;

  @Output()
  onClick = new EventEmitter();

  emitOnClick(event: MouseEvent): void{
    if(this.clickable){
      console.log("event", event)
      this.onClick.emit(event);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
