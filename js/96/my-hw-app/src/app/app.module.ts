import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
