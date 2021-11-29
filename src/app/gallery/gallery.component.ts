import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GalleryService} from "../services/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhoto:any;
  currentPage:number=1;
  size:number=5;
  pages:Array<number>=[];
  totalPages:number=0;
  motCle:string="";
  constructor(private http:HttpClient, private galleryService:GalleryService) { }


  ngOnInit(): void {
  }
  onSearch(dataForm:any){
    console.log(dataForm);
    this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
      .subscribe(resp=>{
        //console.log(resp);
        this.pagePhoto=resp;
        // @ts-ignore
        let totalHits:number = resp['totalHits'];
        //console.log(resp["totalHits"]);
        this.totalPages=Math.trunc(totalHits / this.size);
        console.log(this.totalPages);

        if(totalHits % this.size !=0) ++this.totalPages;
        console.log(this.totalPages);
        this.pages= new Array(this.totalPages);
      },err=>{
        console.log(err);
      });


  }
  goToPage(i:number){
    this.currentPage=i;
    console.log(this.motCle);
    // this.onSearch(this.motCle);
    this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
      +this.motCle+"&per_page="+this.size+"&page="+this.currentPage)

      .subscribe(resp=>{
        //console.log(resp);
        this.pagePhoto=resp;

        // @ts-ignore
        let totalHits:number = resp['totalHits'];
        console.log(totalHits);
        this.totalPages=Math.trunc(totalHits / this.size);
        console.log(this.totalPages);
        if(totalHits % this.size !=0) ++this.totalPages;
        console.log(this.totalPages);
        this.pages= new Array(this.totalPages);
      });

  }
}
