import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
