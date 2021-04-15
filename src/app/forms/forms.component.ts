import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  Form = this.fb.group({
    username: [],
    age: [],
    users: this.fb.array([]),
    tasks:this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }


  // getter to access formarray
  get users() {
    return this.Form.get('users') as FormArray;
  }

  get tasks(){
    return this.users.get('tasks') as FormArray;
  }


addTask(){
  this.tasks.push(this.fb.control(''))
}

  addUser() {
    this.users.push(this.fb.group({
      name: [""],   
    }))
  }



  submit() {
    console.log("submit function")
    console.log(this.Form.value); 
    // this.users.clear()
  }


  setControls(index){

    console.log(index);
    this.users.setControl(index,this.fb.group({
      name:["updated name"]
    }))

  }

}
