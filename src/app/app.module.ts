import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarModule as PrimeNgCalendarModule } from 'primeng/calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    AngularCalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    PrimeNgCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
