import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import {StudentsService} from './students.service';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { ToastComponent } from './toast/toast.component';
import { SelectComponent } from './select/select.component';
import { SortPipe } from './sort.pipe';
import { Table1Component } from './table1/table1.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MultifilterPipe } from './multifilter.pipe';
import { ExcelComponent } from './excel/excel.component';
@NgModule({
  declarations: [
    AppComponent,
  
routingcomponents,
  
FormsComponent,
  
CardComponent,
  
CheckboxComponent,
  
TableComponent,
  
ToastComponent,
  
SelectComponent,
  
SortPipe,

  
Table1Component,

  
DropdownComponent,

  
MultifilterPipe,

  
ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
