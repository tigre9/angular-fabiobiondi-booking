import {RouterModule, Routes} from "@angular/router";
import {NoResultComponent} from "./no-result.component";
import {NgModule} from "@angular/core";
import {SearchComponent} from "./search.component";

const routes: Routes = [
  { path: 'no-results', component: NoResultComponent },
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
