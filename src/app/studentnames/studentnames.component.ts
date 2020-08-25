import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'studentnames',
  templateUrl: './studentnames.component.html',
  styleUrls: ['./studentnames.component.css']
})
export class StudentnamesComponent implements OnInit {


//create an empty array for students

public students=[];
  //create an instance for student service
  constructor(private studentservice:StudentsService,private router:Router) { }


//fetch the data in ngoninit method
  ngOnInit(): void {
this.students=this.studentservice.getstudents();
    
  }

  selectstudent(student){
    console.log(student.name);
this.router.navigate(['/studentdetails',student.name]);
  }
}
