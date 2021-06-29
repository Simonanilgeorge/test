import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

    data = [
    { name: "john", id: 1, class: 10, address: "kerala", dob: 1997, contact: 938984398 },
    { name: "doe", id: 2, class: 12, address: "karnataka", dob: 1998, contact: 98764398 },
    { name: "barry", id: 3, class: 9, address: "goa", dob: 2000, contact: 938976398 },
    { name: "allen", id: 4, class: 6, address: "new delhi", dob: 2001, contact: 93834398 },
    { name: "bruce", id: 5, class: 6, address: "gujarat", dob: 1990, contact: 938654398 },
  ];

formData;

filterForm=this.fb.group({
  name:[""],
  id:[""],

  class:[""],
  address:[""],
  dob:[""],
  contact:[""]
})

string
  testArray=["john","doe","bruce","allen","test"]
bruce:String
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){

  }

}
