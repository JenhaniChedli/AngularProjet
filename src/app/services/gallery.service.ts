import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  search(motCle:string,size:number,page:number){
    //console.log(motCle);
    return this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
      +motCle+"&per_page="+size+"&page="+page)




  }
}
