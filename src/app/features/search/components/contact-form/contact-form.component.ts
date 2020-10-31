import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <form #contactForm="ngForm" (ngSubmit)="send.emit(contactForm.value)">
      <input type="text" placeholder="Your email*" required [ngModel] name="email">
      <textarea cols="20" rows="6" placeholder="Your message*" required [ngModel] name="msg" ></textarea>
      <button type="submit" [disabled]="contactForm.invalid">SEND</button>
    </form>
  `,
  styles: [
  ]
})
export class ContactFormComponent {
@Output() send: EventEmitter<any> = new EventEmitter<any>()

}
