import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered" [ngClass]="{'error': auth.error}">
        <div class="title">Login</div>
        <div class="content">

          <form #f="ngForm" (submit)="auth.login(f.value)">
            <input type="text" placeholder="Username" [ngModel] name="user" required>
            <input type="password" placeholder="password" [ngModel] name="pass" required>
            <button type="submit" [disabled]="f.invalid" >SIGN-IN</button>
          </form>
        </div>
      </div>


    </div>
  `,
  styles: [
  ]
})
export class LoginComponent{

  constructor(public auth: AuthService) { }


}
