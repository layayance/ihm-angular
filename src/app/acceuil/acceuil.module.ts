import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import {SharedModule} from "../shared/shared.module";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    AccueilComponent
  ],
    imports: [
        CommonModule,
        AcceuilRoutingModule,
        SharedModule,
        AppModule,
        CoreModule
    ]
})
export class AcceuilModule { }
