import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../../../model/hotel";

@Component({
  selector: 'app-rates',
  template: `
    <div class="font-superbig">
      {{active?.rate}}
      <i class="ion-ios-person"></i>
    </div>
  `,
  styles: [
  ]
})
export class RatesComponent {
@Input() active: Hotel;

}
