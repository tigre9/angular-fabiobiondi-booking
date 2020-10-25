import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div class="wrapper">
      <div class="card">
        <div class="title">Cart (1)</div>
        <div class="content">

          <div class="horiz-grid separator">
            <div class="font-medium">Hotel XYZ</div>
            <div>Single</div>
            <div>€ 89</div>
            <div><i class="icon ion-ios-trash"></i></div>
          </div>


          <br>
          <br>
          <div class="horiz-grid">
            <div></div>
            <em>1 item</em>
          </div>

        </div>
      </div>


    </div>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
