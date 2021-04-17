import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {StudentsService} from './students.service';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
  
routingcomponents,
  
FormsComponent,
  
CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
