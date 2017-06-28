import { Component, OnInit } from '@angular/core';
import {ServiceseriesService} from '../serviceseries.service';
import{RouterModule, Routes, Router} from '@angular/router';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
data2=[];
flag=true;
  constructor(private router: Router,public demo:ServiceseriesService ) {}

  ngOnInit() {
    this.onclick();
  }
    
  onclick(){
    this.flag=!this.flag;
   this.demo.get_seasons()
  .subscribe(resdata => this.data2 = resdata);
  console.log(this.data2)

   }
onclick2(){
this.router.navigate(['/comic']);
      
  }
  
}
