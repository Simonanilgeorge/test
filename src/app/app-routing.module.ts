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

//configure all possible routes

const routes: Routes = [
  // {path:'',component:FormsComponent},
  {path:'',component:ToastComponent},
  {path:'table',component:TableComponent},
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