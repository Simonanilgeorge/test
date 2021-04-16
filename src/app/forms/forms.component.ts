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
    task:[""],
    test:this.fb.array(["test one","test two"]),
    users: this.fb.array([])

  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

get test(){
  return this.Form.get("test") as FormArray
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
      tasks:this.fb.array(["hello","world"])
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

// task index

let tasks=this.users.at(index).get("tasks") as FormArray

console.log("tasks")
console.log(tasks)

console.log("tasks.controls")
console.log(tasks.controls);

}

  submit() {
    console.log("submit function")
    console.log(this.Form.value);
    // this.users.clear()
  }


  setControls(index) {

    console.log(index);

    this.users.setControl(index, this.fb.group({
      name: ["updated name"],
      tasks:this.fb.array(["hi","world"])
    }))

  }
updateTask(index){


  console.log(this.users.at(index));
  let tasks= this.users.at(index).get("tasks") as FormArray
tasks.patchValue(["tesing","patch"])
}
updateTest(){


  console.log("update test")
 console.log(this.test);
 this.test.patchValue(["hello","world"])


}

}
