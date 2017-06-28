import { Component, OnInit } from '@angular/core';
import { HttpModule, RequestOptions, Http ,Headers} from '@angular/http';
import {ServiceseriesService} from '../serviceseries.service';
import{RouterModule, Routes,Router} from '@angular/router';
@Component({
  selector: 'app-comicsearch',
  templateUrl: './comicsearch.component.html',
  styleUrls: ['./comicsearch.component.css']
})
export class ComicsearchComponent implements OnInit {
  status: any;
  Searchdata: any;
  data=[];
  constructor(public demo:ServiceseriesService,private router: Router) { }

  ngOnInit() {
  }

onclick3(f1) {
   console.log(this.Searchdata,"hi");
this.demo.search(this.Searchdata).subscribe(res => {
      this.data = res.respData.data;
      this.status= res.status;
      
      console.log(this.data);
    })
  }


  //  onclick(){
  // this.flag=!this.flag;
  //  this.demo.get_comics()
  // .subscribe(resdata => this.data2 = resdata);
  //   console.log(this.data2)

  //  }
//   onclick3(f1){

// // console.log(f1.value.username);
// // console.log(f1.value.password);
//   console.log(f1.value)
//   this.demo.loginusers(f1.value).subscribe(res=>{
//   // this.valid=res;
// console.log(res,"fromservice");
// //console.log(res);
// this.status=res[0].types
// console.log(this.status)

}
