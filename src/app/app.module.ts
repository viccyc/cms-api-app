import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResortsComponent } from './components/resorts/resorts.component';
import { KiosksComponent } from './components/kiosks/kiosks.component';
import { TicketsComponent } from './components/tickets/tickets.component';

import { ResortService } from './services/resorts/resort.service';
import { KioskService } from './services/kiosks/kiosk.service';
import { TicketsService } from './services/tickets.service';

@NgModule({
  declarations: [
    AppComponent,
    ResortsComponent,
    KiosksComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ResortService,
    KioskService,
    TicketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
