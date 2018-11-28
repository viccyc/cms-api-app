import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResortsComponent } from './components/resorts/resorts.component';

import { ResortService } from './services/resort.service';

@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ResortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
