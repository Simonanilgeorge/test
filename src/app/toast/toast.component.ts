import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() message
  @Input() classBoolean

  // classBoolean: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.toast();

  }

  toast() {
    console.log(this.classBoolean)
  }
}
