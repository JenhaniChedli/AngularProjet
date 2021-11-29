import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 /*info={
   nom:"ilef",
   email:"ileffriaa@gmail.com",
   tel:23676473

 }
 comments=[
   {date:new Date(),message:"A"},
   {date:new Date(),message:"B"},
   {date:new Date(),message:"C"},
 ]*/
  info:any;
  comments:any=[];
  newComment=false;
 commentaire:any={date:null,message:""};

  constructor(private aboutService:AboutService) {
    this.info= this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
  }

  ngOnInit(): void {
  }
// 1 ere methode sans form
  // et sans service
  /* onAddCommentaires(){
     this.commentaire.date= new Date();
     this.comments.push(this.commentaire);
     this.commentaire={date:null,message:""}
   }*/


  //2 emme methode form

/*
  onAddCommentaires(c:any) {
    //this.commentaire.message=c;
    c.date = new Date();
    this.comments.push(c);
    this.commentaire.message = "";
  }
    // on doit la déplacer au service about

  // en utilisant service about

 */
onAddCommentaires(c:any){

 this.aboutService.addComment(c);
  this.commentaire.message="";
  //this.comments=this.aboutService.getAllComments();
}
}
