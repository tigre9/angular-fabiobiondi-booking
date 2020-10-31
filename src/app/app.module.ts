import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { IntToArrayPipe } from './features/pipes/int-to-array.pipe';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { SeparatorComponent } from './features/shared/components/separator/separator.component';
import { GmapComponent } from './features/search/components/gmap/gmap.component';
import { RatesComponent } from './features/search/components/rates/rates.component';
import { StarsComponent } from './features/search/components/stars/stars.component';
import { ImageGalleryComponent } from './features/search/components/image-gallery/image-gallery.component';
import { ServicesComponent } from './features/search/components/services/services.component';
import { ContactFormComponent } from './features/search/components/contact-form/contact-form.component';
import { ReservationsComponent } from './features/search/components/reservations/reservations.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    IntToArrayPipe,
    HotelListComponent,
    HotelFormComponent,
    SeparatorComponent,
    GmapComponent,
    RatesComponent,
    StarsComponent,
    ImageGalleryComponent,
    ServicesComponent,
    ContactFormComponent,
    ReservationsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
