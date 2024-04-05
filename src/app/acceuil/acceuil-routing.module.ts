import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {BarreComponent} from "../barre/components/barre/barre.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'barre', component: BarreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
