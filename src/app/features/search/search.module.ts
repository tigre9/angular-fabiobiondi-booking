import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search.component";
import {HotelListComponent} from "./components/hotel-list/hotel-list.component";
import {HotelFormComponent} from "./components/hotel-form/hotel-form.component";
import {GmapComponent} from "./components/gmap/gmap.component";
import {RatesComponent} from "./components/rates/rates.component";
import {StarsComponent} from "./components/stars/stars.component";
import {ImageGalleryComponent} from "./components/image-gallery/image-gallery.component";
import {ServicesComponent} from "./components/services/services.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {ReservationsComponent} from "./components/reservations/reservations.component";
import {NoResultComponent} from "./no-result.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {SearchRoutingModule} from "./search-routing.module";



@NgModule({
  declarations: [
    SearchComponent,
    HotelListComponent,
    HotelFormComponent,
    GmapComponent,
    RatesComponent,
    StarsComponent,
    ImageGalleryComponent,
    ServicesComponent,
    ContactFormComponent,
    ReservationsComponent,
    NoResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
