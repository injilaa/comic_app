import { Component, OnInit } from '@angular/core';
import{RouterModule, Routes, Router} from '@angular/router';
import {ServiceseriesService} from '../serviceseries.service';
import { HttpModule, RequestOptions, Http ,Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  valid: any;
status
checkdata: any;
  verify: any;
  usercheck: any;
  token: any;
  type1: any;
  type: any;
  user: string;
  pass: string
  check
  constructor(private router:Router,public demo:ServiceseriesService) { }
  ngOnInit() {

  }
 onclick2(){
this.router.navigate(['/series']);

  }
  onclick6(){
this.router.navigate(['/comicss']);

  }
onclick3(f1){

// console.log(f1.value.username);
// console.log(f1.value.password);
console.log(f1.value);
this.demo.loginusers(f1.value).subscribe(res=>{
  // this.valid=res;
console.log(res,"fromservice");
// console.log(res,"a1");
this.status=res.data[0].types
console.log(this.status)
this.check=res.data[0].veriffy
console.log(this.check,"check")
localStorage.setItem('types', this.status)
localStorage.setItem('token', res.token)
switch(res){
  case "user dont exist":
  alert("hdjchj");
  break;

  default:
   switch(this.check){
    
    case false:
    alert('please verify')
     break;
   
    case true:
   if(this.status == "super")
   {
   this.router.navigate(['/super']);
   }


   else if(this.status == "user")
   {
     this.router.navigate(['/user']);
    }
    
 
   else if(this.status == "admin")
   {
     this.router.navigate(['/admin']);
    }
    
  else  {
        alert("User Does not exist");
        }
   break;
     }
    }
})

} 

}