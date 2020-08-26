import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

//return an array of students
students=[
  {name:"john",id:1,class:10,address:"kerala",dob:1997,contact:938984398},
  {name:"doe",id:2,class:12,address:"karnataka",dob:1998,contact:98764398},
  {name:"barry",id:3,class:9,address:"goa",dob:2000,contact:938976398},
  {name:"allen",id:4,class:6,address:"new delhi",dob:2001,contact:93834398},
  {name:"bruce",id:5,class:6,address:"gujarat",dob:1990,contact:938654398},
];
getstudents(){
 
  console.log(`1st element is ${this.students[0].name}`);
  return this.students;
  

}


getdetails(Name:string){
let pos;
for(let i=0;i<=this.students.length;i++)
{
  if(this.students[i].name===Name){
    pos=i;

  }
}
  console.log(`details of student${this.students[pos].name}`)
  return this.students[pos];



}
}




