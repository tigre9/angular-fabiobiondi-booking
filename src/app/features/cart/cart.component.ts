import { Component, OnInit } from '@angular/core';
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-cart',
  template: `
    <div class="wrapper">
      <div class="card">
        <div class="title">Cart ({{cart.items.length}})</div>
        <div class="content">

          <div class="horiz-grid separator"
            *ngFor="let cartItem of cart.items">
            <div class="font-medium">{{cartItem.hotel.name}}</div>
            <div>{{cartItem.room.label}}</div>
            <div>€ {{cartItem.room.price}}</div>
            <div>
              <i class="icon ion-ios-trash" (click)="cart.removeFromCart(cartItem)"></i>
            </div>
          </div>


          <br>
          <br>
          <div class="horiz-grid">
            <div></div>
            <em>{{cart.items.length}} item</em>
          </div>

        </div>
      </div>


    </div>
  `,
  styles: [
  ]
})
export class CartComponent{

  constructor(public cart: CartService) { }


}
