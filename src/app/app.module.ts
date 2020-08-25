import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {StudentsService} from './students.service';
@NgModule({
  declarations: [
    AppComponent,
  
routingcomponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
