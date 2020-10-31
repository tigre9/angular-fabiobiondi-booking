import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hotel, Room} from "../../model/hotel";
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-search',
  template: `
    <!--CONTENT-->
    <div class="wrapper three-cols">
      <!--SIDEBAR-->
      <div class="card side-bar scrollable">
        <div class="title">Search</div>
        <div class="content">

          <app-hotel-form
            [text]="text"
            (search)="searchHotels($event)"
          ></app-hotel-form>

          <app-separator></app-separator>

            <app-hotel-list
                [text]="text"
                [active]="active"
                [hotels]="hotels"
                (setActive)="setActive($event)"
            ></app-hotel-list>


        </div>
      </div>

      <!--MAP-->
      <div class="card map">
        <div>
          <app-gmap [active]="active"></app-gmap>
        </div>
      </div>

      <!--INFO BOX-->
      <div class="card">
        <div class="content center">
          <app-separator></app-separator>
          <app-rates [active]="active"></app-rates>
          <app-stars [stars]="active?.stars"></app-stars>
          <br>
          <app-reservations [active]="active" (addToCart)="cart.addToCart(active,$event)"></app-reservations>
        </div>

      </div>

      <!--IMAGE GALLERY-->
      <div class="card gallery scrollable">
        <app-image-gallery [active]="active" [activeImage]="activeImage"></app-image-gallery>
      </div>

      <!--SERVICES-->
      <div class="card services scrollable">
        <div class="title">Services</div>
        <app-services [active]="active"></app-services>
      </div>

      <!--CONTACT FORM-->
      <div class="card contact">
        <div class="title">Contacts</div>
        <div class="content">
          <app-contact-form (send)="sendEmail($event)"></app-contact-form>
        </div>
      </div>

    </div>
  `,
  styles: [
  ]
})
export class SearchComponent {
  text: string = 'Milan';
  hotels: Hotel[];
  active: Hotel;
  activeImage: string;

  constructor(
    public cart: CartService,
    private http: HttpClient) {
    this.searchHotels(this.text);
  }


  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>(`http://localhost:3000/hotels?q=${text}`)
      .subscribe(result => {
        this.hotels = result;
        this.setActive(this.hotels[0]);
      });
  }

  setActive(hotel: Hotel):void{
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }

  sendEmail({email, msg}) {
    window.alert(`sent:
    ${email}
    ${msg}
    to: ${this.active.email}
    `);
  }
}
