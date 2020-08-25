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
  //activated router instance created with variable router
  //it is used to get info from the url

  constructor(private studentservice:StudentsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.students=this.studentservice.getstudents();
    // let name=(this.route.snapshot.paramMap.get('name'));
    // this.studentname=name;

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let name=(params.get('name'));
      this.studentname=name;

    })
  }

}
