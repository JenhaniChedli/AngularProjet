import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info={
    nom:"chedli",
    email:"chedlijenhani@gmail.com",
    tel:20410944

  }
  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"},
  ]
  constructor() { }

  addComment(c:any) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }
}
