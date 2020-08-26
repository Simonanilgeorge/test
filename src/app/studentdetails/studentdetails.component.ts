import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

public studentname=""
  public students=[];
  public stud:any=[];

  //activated router instance created with variable router
  //it is used to get info from the url

  constructor(private studentservice:StudentsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  

   

let name:string;
this.students=this.studentservice.getstudents();
// console.log(`the type of students array is ${this.students}`)



  
    name = this.route.snapshot.paramMap.get('name');
    // console.log(`the student name from the url is ${name}`);

    
    this.stud=this.studentservice.getdetails(name);
    // console.log(`the type of stud is ${this.stud}`)
      
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   let name=(params.get('name'));
    //   this.studentname=name;
  }

}
