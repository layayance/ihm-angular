import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { BarreComponent } from './barre/components/barre/barre.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  exports: [
    BarreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
