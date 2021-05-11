import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  options = ["one", "two", "three"]

test:string;
  Select = this.fb.group({
    select: [""],
    name: [""],
    time:[""]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get select() {
    return this.Select.get("select");
  }
  onSubmit() {
    console.log(this.Select.value);
  }

  cascade(event) {
    console.log(event.target.value);


  }

  changeSelect() {
    console.log("change select function")
    console.log(this.select);
    // this.select.setValue("three");
    let value = {
      select: "three",
      name: "my name"
    }
    this.Select.setValue(value);

  }
}
