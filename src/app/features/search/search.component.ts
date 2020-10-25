import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-search',
  template: `
    <!--CONTENT-->
    <div class="wrapper three-cols">
      <!--SIDEBAR-->
      <div class="card side-bar scrollable">
        <div class="title">Search</div>
        <div class="content">
          <form #f="ngForm" (ngSubmit)="searchHotels(f.value.text)">
            <input type="text" placeholder="City (Rome or Milan)" [ngModel]="text" name="text">
            <button type="submit">SEARCH</button>
          </form>

          <div class="separator"></div>
          <div class="font-big">Hotel in {{text}}</div>

          <div
            *ngFor="let hotel of hotels"
            (click)="setActive(hotel)"
            [ngClass]="{'active': hotel.id === active?.id}"
            class="horiz-grid separator">
            <div>{{hotel.name}}</div>
            <div>da € {{hotel.rooms[0].price}}</div>
          </div>


          <div class="separator"></div>
          <div class="horiz-grid">
            <div></div>
            <em>{{hotels?.length}} results</em>
          </div>

        </div>
      </div>

      <!--MAP-->
      <div class="card map">
        <div>
          <img src="https://maps.googleapis.com/maps/api/staticmap?center={{active?.city}}&zoom=15&size=700x200&key=AIzaSyBYvPZPIFB4TYsRFl6TF3QIbxghz_p3ito"
               width="100%" height="200">
          <div class="address">
            <div class="font-big">{{active?.name}}</div>
            <div class="font-small">{{active?.location.address}}</div>
          </div>
        </div>
      </div>

      <!--INFO BOX-->
      <div class="card">
        <div class="content center">
          <!--<img src="https://picsum.photos/400/200/?image=12" width="100%" height="200">-->

          <div class="separator"></div>
          <div class="font-superbig">
            {{active?.rate}}
            <i class="ion-ios-person"></i>
          </div>
          <i *ngFor="let star of 5 | intToArray; let i = index"
             class="icon"
             [ngClass]="{
            'ion-ios-star': i < active?.stars,
            'ion-ios-star-outline': i >= active?.stars
           }"
          ></i>
          <br>

          <div
            *ngFor="let room of active?.rooms"
            class="horiz-grid separator">
            <div>{{room.label}}</div>
            <div>
              € {{room.price}}
              <i class="ion-ios-cart"></i>
            </div>
          </div>
        </div>

      </div>
      <!--IMAGE GALLERY-->
      <div class="card gallery scrollable">
        <img [src]="activeImage" width="100%" height="150">
        <div class="nested">
          <div *ngFor="let img of active?.images"
          (click)="activeImage=img"
          >
            <img [src]="img" width="100%">
          </div>
        </div>
      </div>

      <!--SERVICES-->
      <div class="card services scrollable">
        <div class="title">Services</div>
        <div class="nested">
          <div *ngFor="let icon of active?.services">
            <i [class]="'icon ion-ios-'+icon" [title]="icon"></i>
          </div>
        </div>
      </div>

      <!--CONTACT FORM-->
      <div class="card contact">
        <div class="title">Contacts</div>
        <div class="content">
          <form #contactForm="ngForm" (ngSubmit)="sendEmail(contactForm.value)">
            <input type="text" placeholder="Your email*" required [ngModel] name="email">
            <textarea cols="20" rows="6" placeholder="Your message*" required [ngModel] name="msg" ></textarea>
            <button type="submit" [disabled]="contactForm.invalid">SEND</button>
          </form>
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

  constructor(private http: HttpClient) {
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
  }}
