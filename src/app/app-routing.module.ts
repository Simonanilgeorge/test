import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentnamesComponent} from './studentnames/studentnames.component';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {FormsComponent} from './forms/forms.component'

//configure all possible routes

const routes: Routes = [
  {path:'',component:FormsComponent},
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