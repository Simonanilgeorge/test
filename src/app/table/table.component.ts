import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() data
title=[];
titleName:String;

  // data = [
  //   { name: "john", id: 1, class: 10, address: "kerala", dob: 1997, contact: 938984398 },
  //   { name: "doe", id: 2, class: 12, address: "karnataka", dob: 1998, contact: 98764398 },
  //   { name: "barry", id: 3, class: 9, address: "goa", dob: 2000, contact: 938976398 },
  //   { name: "allen", id: 4, class: 6, address: "new delhi", dob: 2001, contact: 93834398 },
  //   { name: "bruce", id: 5, class: 6, address: "gujarat", dob: 1990, contact: 938654398 },
  // ];
  constructor() { }

  ngOnInit(): void {

    this.getTitles();
  }

  getTitles() {
    // console.log(this.data);

    this.title=this.data.map((data)=>{
      return Object.keys(data);
    })[0]

    // console.log(this.title)
  }

  getTitleName(title){
    
    this.titleName=null;
    setTimeout(()=>{
      this.titleName=title;
    },100)


  }
 

}
