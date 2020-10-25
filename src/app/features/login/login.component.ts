import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered">
        <div class="title">Login</div>
        <div class="content">

          <form>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="password">
            <button type="submit">SIGN-IN</button>
          </form>
        </div>
      </div>


    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
