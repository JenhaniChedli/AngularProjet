import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  public city:string;
  public dataMeteo:any;
  constructor(private meteoService: MeteoService) {
    this.city="";
  }

  ngOnInit(): void {
  }
  onLoadMeteo() {
    this.meteoService.getMeteoData(this.city)
      .subscribe(data=>{
        this.dataMeteo=data;
      },err=>{
        console.log(err);
      });
  }

}
