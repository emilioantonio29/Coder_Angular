import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styled-text',
  template: `
    <p style="background-color: var(--p-background); width: 100%; font-weight: bold; color: white">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
  ]
})
export class StyledTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
