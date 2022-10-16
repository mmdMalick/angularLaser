import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./layout/footer/footer.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
