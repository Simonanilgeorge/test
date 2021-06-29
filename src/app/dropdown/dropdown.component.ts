import { Component, OnInit } from '@angular/core';



import { FormBuilder, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  Form = this.fb.group({
date:[new Date().toISOString().split('T')[0]],
name:[new Date().toISOString().split('T')[0]]

  })
  displayBoolean=false;

  data=["jim","stanley","pam","michael","john","doe","dwight"]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let date=new Date()
    console.log(date);
  }



  getName(data){
    console.log(data);
 
    console.log(this.displayBoolean)

  }



  display(){
    this.displayBoolean=!this.displayBoolean;
    console.log(this.displayBoolean)
  }

  submit(){
    console.log(this.Form.value)
  }
}
