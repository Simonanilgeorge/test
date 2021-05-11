import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnChanges {
  @Input() message
  @Input() classBoolean
  @Output() test = new EventEmitter();

  // classBoolean: boolean = false;
  constructor() { }

  // ngOnInit(): void {
  //   this.toast();

  // }


  ngOnChanges(changes: SimpleChanges) {

    // console.log("inside On Changes")
    // console.log(changes.classBoolean);
    // console.log(changes.classBoolean.currentValue);
    setTimeout(() => {
      this.test.emit(false);
    },1500)


  }

}
