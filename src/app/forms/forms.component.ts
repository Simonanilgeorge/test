import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  disabled=true;
newForm=this.fb.group({
inputs:this.fb.group({
  test1:["",Validators.required],
  test2:[""]
})


});

  Form = this.fb.group({
    username: [{value:'',disabled:this.disabled}],
    age: [{value:'',disabled:this.disabled}],
    phone:[{value:'',disabled:true}],
    email:[{value:'',disabled:true}],
    task: [""],

    test: this.fb.array([]),
    users: this.fb.array([])

  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

get phone(){
  return this.Form.get("phone")
}
get email(){
  return this.Form.get("email")
}
  get username(){
    return this.Form.get("username")
  }
  get age(){
    return this.Form.get("age")
  }
get test1(){
  return this.inputs.get("test1");
}

get inputs(){
  return this.newForm.get("inputs");
}

  get test() {
    return this.Form.get("test") as FormArray
  }
  // getter to access formarray
  get users() {
    return this.Form.get('users') as FormArray;
  }

  get tasks() {
    return this.users.get('tasks') as FormArray;
  }


addTest(){
  this.test.push(this.fb.control(this.Form.value))



}

  addTask(index) {

    this.taskList(index).push(this.fb.control(''))
  }

  addUser() {
    this.users.push(this.fb.group({
      name: [""],
      tasks: this.fb.array(["hello", "world"])
    }))
  }

  taskList(index: number): FormArray {
    return this.users.at(index).get("tasks") as FormArray
  }


  getUserIndex(index) {
    let users = this.Form.get('users') as FormArray
    console.log(`inside get user index function `)
    console.log(users)


    console.log("users.controls")
    console.log(users.controls)


    console.log(" current user details")
    let currentUser = users.at(index)

    console.log(currentUser)

    // task index

    let tasks = this.users.at(index).get("tasks") as FormArray

    console.log("tasks")
    console.log(tasks)

    console.log("tasks.controls")
    console.log(tasks.controls);

  }

  submit() {
    console.log("submit function")
    console.log(this.Form.value);

    console.log("test array")
    console.log(this.test.getRawValue())
    // this.users.clear()
  }


  setControls(index) {

    console.log(index);

    this.users.setControl(index, this.fb.group({
      name: ["updated name"],
      tasks: this.fb.array(["hi", "world"])
    }))

  }
  updateTask(index) {

    console.log(this.users.at(index));
    let tasks = this.users.at(index).get("tasks") as FormArray
    tasks.patchValue(["testing"])

  }

  updateTest() {


    console.log("update test")
    console.log(this.test);

    // this.test.patchValue(["update","update 2","update 3"])

    
    console.log("after patch test");
    
    console.log(this.test);

  //  this.test.value.push(this.fb.array(["one update","two update"]))


  }


  newFormSubmit(){
    console.log(JSON.stringify(this.newForm.value));
    console.log("this.test1")
    console.log(this.test1);

  }


  toggleDisable(){
    console.log("toggle function called")
    // console.log(typeof(this.username.disabled))
    console.log(this.Form.disabled)

if(this.username.disabled && this.age.disabled){
  this.Form.enable()
  this.phone.disable()
  this.email.disable()
}
else{
  this.Form.disable()
  
}
    // if(this.username.disabled){
    //   this.username.enable()
    // }
 
    // else{
    //   this.username.disable()
    // }
    // this.age.disable()
    
   
    
    
  }
}
