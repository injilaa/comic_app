import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ServiceseriesService } from '../serviceseries.service';
import { HttpModule, RequestOptions, Http, Headers } from '@angular/http';
@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  flag: boolean;
  data1: {
     username:String;
     types:String,

  }={
    username:'',
    types:''
  };
  public Users;
  data2 = [];
  data3 = [];
  data6;

  data0:{
 username:String;
 password:String;
 types:String;
 email: String;
  }={
    username:'',
    password:'',
    types:'',
    email:''
  };
  flag2;
  constructor(private router: Router, public demo: ServiceseriesService) { }

  ngOnInit() {
   this.showall();
    this.flag=false;
    this.flag2=false;
  }
  click3() {
    this.router.navigate(['/series']);
  };
    
    
edit_user(data)  {
 this.flag=true;
 console.log(data);
this.data1.username=data;
console.log(this.data1.username);

}
  
  onclick3() {
    
    
   console.log(this.data1.types);
    this.demo.superupdate(this.data1).subscribe(res => {

      console.log(res, "fromservice");


    })
  }

delete_user(data4) {
    console.log(data4);
    this.demo.DeleteUsers(data4).subscribe(res => {
     // this.Users = res.respData.data;
      console.log(res);
    this.showall();

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }

  showall() {
    this.demo.get_users()
      .subscribe(resdata => {
      this.data3 = resdata
        console.log(this.data3)
      })
  }

  
  //   onclick(){
  //    this.demo.get_users()
  //   .subscribe(resdata => this.data2 = resdata);
  //   console.log(this.data2)
  //  //this.flag=!this.flag;
  //  //this.router.navigate(['/season']);
  //    }
  logout() {
    localStorage.clear();
    this.router.navigate(["/"])
  }
  
  add_user(data6,data){
   console.log(data6.value);
   console.log(data);
 this.data0.username=data6.value.username;
this.data0.password=data6.value.password;
this.data0.email=data6.value.email;
this.data0.types=data;
    this.demo.Adduser(this.data0).subscribe(res => {
    console.log(res);
     //this.showall();
  })

}
click4()
{
  this.flag2=true;
}
  
 }

