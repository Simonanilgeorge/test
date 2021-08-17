import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentnamesComponent} from './studentnames/studentnames.component';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {FormsComponent} from './forms/forms.component'
import {CardComponent} from './card/card.component'
import {CheckboxComponent} from './checkbox/checkbox.component'
import {TableComponent} from './table/table.component'
import {ToastComponent} from './toast/toast.component'
import { SelectComponent } from './select/select.component';
import {Table1Component} from './table1/table1.component'
import {DropdownComponent} from './dropdown/dropdown.component'
import {ExcelComponent} from './excel/excel.component'
//configure all possible routes

const routes: Routes = [
  {path:'',component:FormsComponent},
  {path:'excel',component:ExcelComponent},
  // {path:'',component:ToastComponent},
  {path:'dropdown',component:DropdownComponent},
  {path:'table',component:TableComponent},
  {path:'table1',component:Table1Component},
  {path:'select',component:SelectComponent},
  {path:'checkbox',component:CheckboxComponent},
  {path:'card',component:CardComponent},
  {path:'employeedetails',component:EmployeeDetailsComponent},
  {path:'studentdetails/:name',component:StudentdetailsComponent},
  {path:'studentnames',component:StudentnamesComponent},
  {path:'studentdetails',component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 

//create an array of components
 export const routingcomponents=[StudentnamesComponent,StudentdetailsComponent,EmployeeDetailsComponent];