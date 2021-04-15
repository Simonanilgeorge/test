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
    users: this.fb.array([])

  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }


  // getter to access formarray
  get users() {
    return this.Form.get('users') as FormArray;
  }

  get tasks() {
    return this.users.get('tasks') as FormArray;
  }


  addTask(index) {
    this.taskList(index).push(this.fb.control(''))
  }

  addUser() {
    this.users.push(this.fb.group({
      name: [""],
      tasks:this.fb.array([])
    }))
  }

  taskList(index:number) : FormArray {
    return this.users.at(index).get("tasks") as FormArray
  }
 

getUserIndex(index){
  let users=this.Form.get('users') as FormArray
  console.log(`inside get user index function `)
  console.log(users)


  console.log("users.controls")
  console.log(users.controls)


  console.log(" current user details")
  let currentUser=users.at(index)

  console.log(currentUser)
}

  submit() {
    console.log("submit function")
    console.log(this.Form.value);
    // this.users.clear()
  }


  setControls(index) {

    console.log(index);
    this.users.setControl(index, this.fb.group({
      name: ["updated name"]
    }))

  }

}
