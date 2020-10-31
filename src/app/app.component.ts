import { Component } from '@angular/core';
import {CartService} from "./core/services/cart.service";
import {AuthService} from "./core/services/auth.service";

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.isLogged()">
      <!--navigation bar-->
      <div class="navigation">
        <div class="horiz-grid">
          <div class="logo">BOOKING</div>
          <div class="horiz-grid">
            <span class="btn" routerLink="search" routerLinkActive="active">SEARCH</span>
            <span class="btn" routerLink="cart" routerLinkActive="active" >CART ({{cart.items.length}})</span>
            <span class="btn" (click)="auth.logout()">LOGOUT</span>
          </div>
          <em>{{auth.data.name}}</em>
        </div>
      </div>
    </div>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-fabiobiondi-booking';

  constructor(public cart: CartService,public auth: AuthService) {
  }

}
