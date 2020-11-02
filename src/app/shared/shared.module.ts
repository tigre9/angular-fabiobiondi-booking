import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {IntToArrayPipe} from "./pipes/int-to-array.pipe";
import {SeparatorComponent} from "./components/separator/separator.component";

const components = [
  IntToArrayPipe,
  CardComponent,
  SeparatorComponent,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...components
  ]
})
export class SharedModule { }
