import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireRoutingModule } from './formulaire-routing.module';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {FormulaireService} from "./components/formulaire/services/formulaire.service";


@NgModule({
  declarations: [
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormulaireRoutingModule,
    SharedModule
  ],
  // providers:[
  //   FormulaireService
  // ]
})
export class FormulaireModule { }
