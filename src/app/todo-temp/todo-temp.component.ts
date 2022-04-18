import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-temp',
  templateUrl: './todo-temp.component.html',
  styleUrls: ['./todo-temp.component.css']
})
export class TodoTempComponent implements OnInit {


  todos=[
    new todo(1,"read book",new Date(),false),
    new todo(2,"biking",new Date(),false),
    new todo(3,"hiking",new Date(),false),
    new todo(4,"go to market",new Date(),false),
    new todo(5,"tuition",new Date(),false),
    new todo(6,"homework",new Date(),false)
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
export class todo{
  constructor(public id:number,public task:String,public date:Date,public finish:boolean){}
}