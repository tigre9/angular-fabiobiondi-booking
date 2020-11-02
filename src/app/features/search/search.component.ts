import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../../model/hotel";
import {CartService} from "../../core/services/cart.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-search',
  template: `
    <!--CONTENT-->
    <div class="wrapper three-cols">
      <!--SIDEBAR-->

     <app-card title="Search" customCls="side-bar" [isScrollable]="true">

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

     </app-card>

      <!--MAP-->
      <app-card  customCls="map" [padding]="false">
        <app-gmap [active]="active"></app-gmap>
      </app-card>


      <!--INFO BOX-->
      <app-card [centeredContent]="true">
          <app-separator></app-separator>
          <app-rates [active]="active"></app-rates>
          <app-stars [stars]="active?.stars"></app-stars>
          <br>
          <app-reservations [active]="active" (addToCart)="cart.addToCart(active,$event)"></app-reservations>
      </app-card>

      <!--IMAGE GALLERY-->
      <app-card [isScrollable]="true" customCls="gallery">
        <app-image-gallery [active]="active" [activeImage]="activeImage"></app-image-gallery>
      </app-card>

      <!--SERVICES-->
      <app-card customCls="services" [isScrollable]="true" title="Services">
        <app-services [active]="active"></app-services>
      </app-card>

      <!--CONTACT FORM-->
      <app-card customCls="contact" title="Contacts">
          <app-contact-form (send)="sendEmail($event)"></app-contact-form>
      </app-card>

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
    private http: HttpClient,
    private router: Router
    ) {
    this.searchHotels(this.text);
  }


  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>(`${environment.url}/hotels?q=${text}`)
      .subscribe(result => {
        if(result.length==0){
          this.router.navigateByUrl('search/no-results');
        }else {
          this.hotels = result;
          this.setActive(this.hotels[0]);
        }
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
