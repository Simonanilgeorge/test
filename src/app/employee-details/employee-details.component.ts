import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

//create empty variables for name address salary and blood group
personname="";
personaddress="";
personcontact="";
personsalary="";
personbloodgroup="";


getdetails(NAME,ADDRESS,SALARY,CONTACT,BLOODGROUP){
  this.personname=NAME;
  this.personcontact=CONTACT;
  this.personaddress=ADDRESS;
  this.personsalary=SALARY;
  this.personbloodgroup=BLOODGROUP;
}


  ngOnInit(): void {
  }

}
