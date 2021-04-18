import { Component, OnInit,Input,Output } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
@Input() inputs?
  // inputs = ["stanley", "michael", "jim", "pam", "dwight", "angela", "toby", "creed", "oscar"]

  isActive: boolean = false;
  Form = this.fb.group({
    checkbox: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get checkbox() {
    return this.Form.get("checkbox") as FormArray
  }

  onSubmit() {
    console.log("submit function")
    console.log(this.checkbox.controls)
    console.log(this.checkbox.getRawValue())
  }

  add(e, i) {

    if (e.target.checked) {
      this.checkbox.push(this.fb.control(e.target.value))
      console.log(this.checkbox.getRawValue());
    }
    else if (!e.target.checked && this.checkbox.getRawValue().includes(e.target.value)) {
      let index = this.checkbox.getRawValue().findIndex((check) => {
        return e.target.value === check;

      })
      this.checkbox.removeAt(index);
      console.log(this.checkbox.getRawValue());
    }
  }

  selectAll() {

    this.isActive = !this.isActive;

    if (this.isActive) {
      this.checkbox.clear();
      this.inputs.forEach((input) => {
        this.checkbox.push(this.fb.control(input))
      })
    }
    else {
      this.checkbox.clear();
    }
    console.log(this.checkbox.getRawValue());
    // console.log(this.checkbox.value)
  }

}
