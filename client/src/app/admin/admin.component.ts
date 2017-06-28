import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ServiceseriesService } from '../serviceseries.service';
import { HttpModule, RequestOptions, Http, Headers } from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data88: any;
  NewComic: {
    name: String,
    image: String,
    story: String,
    comments: String,
    season_id: String,
  } = {
    name: '',
    image: '',
    story: '',
    comments: '',
    season_id: '',
  };
  base64: any;
  flag1: Boolean;
  data3 = [];
data00

  data2
  data6

  constructor(private router: Router, public demo: ServiceseriesService) { }

  ngOnInit() {
    this.flag1 = false;
    this.onclick();
   this.onclick_comic()
  }
  onclick() {
    // this.flag=!this.flag;
    this.demo.get_seasons()
      .subscribe(resdata => {
      this.data88 = resdata
        console.log(this.data88)
      });
  }

  click3() {
    this.router.navigate(['/series']);

  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/"])
  }

  AddComics(data6) {
    console.log(this.NewComic);
    console.log(data6);
    this.NewComic.season_id=data6;
    this.demo.PostComic(this.NewComic).subscribe(data => {
      console.log(data);
      alert("Added succesfully");

    }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewComic);
  }
  changeListener(event) {
    console.log(event.target)
    this.encodeImageFileAsURL(event.target)
  }
  encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = (data => {
      this.base64 = reader.result;
      this.NewComic.image = this.base64;
      //console.log('RESULT', reader.result)
    })
    reader.readAsDataURL(file);
    //console.log(this.base64);
  }
  click6() {
    this.flag1= true;
  }
  showall() {
    this.demo.get_comics()
      .subscribe(resdata => {
        this.data3 = resdata
        console.log(this.data3)
      })
  }
  delete_comic(data4) {
    console.log(data4);
    this.demo.Delete_Comic(data4).subscribe(res => {
      // this.Users = res.respData.data;
      console.log(res);


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  // onclick1(){
  // this.flag=!this.flag;
  //  this.demo.get_comics()
  // .subscribe(resdata => this.data00 = resdata);
  //   console.log(this.data2, "this is data2")

  //  }
  //  changeListener(event) {
  //   console.log(event.target)
  //   this.encodeImageFileAsURL(event.target)
  // }
onclick_comic(){
   this.demo.get_comics()
  .subscribe(resdata => this.data2 = resdata);
    console.log(this.data2, "this is data2")

   }


}



