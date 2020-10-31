import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../../../model/hotel";

@Component({
  selector: 'app-stars',
  template: `
    <i *ngFor="let star of 5 | intToArray; let i = index"
       class="icon"
       [ngClass]="{
            'ion-ios-star': i < stars,
            'ion-ios-star-outline': i >= stars
           }"
    ></i>
  `,
  styles: [
  ]
})
export class StarsComponent {
  @Input() stars: number;
}
