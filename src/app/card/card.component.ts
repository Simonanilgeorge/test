import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() student?
  @Output() greeting = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    console.log("this.title")
    console.log(JSON.stringify(this.student))
    console.log(this.greeting)
      
  }

}
