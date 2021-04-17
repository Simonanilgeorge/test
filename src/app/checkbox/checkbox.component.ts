import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

inputs=["stanley","michael","jim","pam","dwight","angela","toby","creed","oscar"]

isActive:boolean=false;
Form=this.fb.group({
checkbox:this.fb.array([])
})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get checkbox(){
    return this.Form.get("checkbox") as FormArray
  }

  onSubmit(){
    console.log("submit function")
  }

  add(e){
    console.log(e.target.checked);
    // this.checkbox.push(this.fb.control(e.target.value))    
  }

  test(){
    console.log("test")
    this.isActive=!this.isActive;
    console.log(this.isActive)
  }
}
