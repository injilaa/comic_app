import { Component, OnInit } from '@angular/core';
import {ServiceseriesService} from '../serviceseries.service';
import{RouterModule, Routes, Router} from '@angular/router';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
data=[];
flag=true;
  constructor(private router: Router,public demo:ServiceseriesService) { }

  ngOnInit() {
    this.onclick();
  }
  
  onclick(){

this.flag=!this.flag;
  this.demo.get_series()
  .subscribe(resdata => this.data = resdata);
  console.log(this.data)
 //this.flag=!this.flag;
 //this.router.navigate(['/season']);
   }
    onclick2(){
this.router.navigate(['/season']);
      
  }
}