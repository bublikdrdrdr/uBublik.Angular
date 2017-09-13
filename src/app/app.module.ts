import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdIconRegistry,
  MdSidenavModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
