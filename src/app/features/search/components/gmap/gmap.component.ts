import {Component, Input} from '@angular/core';
import {Hotel} from "../../../../model/hotel";

@Component({
  selector: 'app-gmap',
  template: `
    <!--          <img src="https://maps.googleapis.com/maps/api/staticmap?center={{active?.city}}&zoom=15&size=700x200&key=AIzaSyBYvPZPIFB4TYsRFl6TF3QIbxghz_p3ito"  width="100%" height="200">-->
    <div class="address">
      <div class="font-big">{{active?.name}}</div>
      <div class="font-small">{{active?.location.address}}</div>
    </div>
  `,
  styles: [
  ]
})
export class GmapComponent{
@Input() active: Hotel;
}
