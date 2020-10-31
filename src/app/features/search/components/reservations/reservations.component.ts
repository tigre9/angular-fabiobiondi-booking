import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel, Room} from "../../../../model/hotel";
import {CartService} from "../../../../core/services/cart.service";

@Component({
  selector: 'app-reservations',
  template: `
    <div
      *ngFor="let room of active?.rooms"
      (click)="addToCart.emit(room)"

      class="horiz-grid separator">
      <div>{{room.label}}</div>
      <div>
        € {{room.price}}
        <i class="ion-ios-cart"></i>
      </div>
    </div>  `,
  styles: [
  ]
})
export class ReservationsComponent {
  @Input() active: Hotel;
  @Output() addToCart: EventEmitter<Room> = new EventEmitter<Room>()
}
