import { Injectable } from '@angular/core';
import {CartItem} from "../../model/cart-item";
import {Hotel, Room} from "../../model/hotel";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private auth:AuthService) { }

  items: CartItem[] = [];

  addToCart(hotel: Hotel, room: Room) {
    this.items = [
      ...this.items,
      {
        hotel: hotel,
        room: room,
        creationDate: Date.now()
      }
    ];
  }

  removeFromCart(cartItem: CartItem) {
    this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate);
  }

  proceed() {
    window.alert(`
    Total item: ${this.items.length}
    Order: ${this.auth.data.name}
    `

    );
  }

}
