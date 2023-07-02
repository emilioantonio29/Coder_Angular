import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
    <main>
      <app-header></app-header>
      <app-general-component></app-general-component>
      <!-- ng-content renders info in the caller -->
      <app-styled-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, impedit aliquid fugiat velit vero iure. Quaerat voluptatem quia id inventore! Odio magni eum quae numquam ad nemo itaque pariatur dolorum!
      </app-styled-text>
      <app-styled-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, impedit aliquid fugiat velit vero iure. Quaerat voluptatem quia id inventore! Odio magni eum quae numquam ad nemo itaque pariatur dolorum!
      </app-styled-text>
      <app-footer></app-footer>
    </main>
  `,
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
