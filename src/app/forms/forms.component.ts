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
    nameArray: [["michael", "Stanley", "Jim", "Dwight"]],

    users: this.fb.array([
      this.fb.group({
        name: ["default name"]
      })

    ])


  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }


  // getter to access formarray
  get users() {
    return this.Form.get('users') as FormArray;
  }


  addUser() {
    this.users.push(this.fb.group({
      name: [""]
    }))
  }



  submit() {
    console.log("submit function")
    console.log(this.Form.value);

    // this.users.clear()


  }

}
