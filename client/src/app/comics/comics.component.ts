import { Component, OnInit } from '@angular/core';
import {ServiceseriesService} from '../serviceseries.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
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
  data2 = [];
flag=true;

data3 = [];
  constructor(public demo:ServiceseriesService) { }

  ngOnInit() {
    this.onclick()
  }

  AddComics() {
    console.log(this.NewComic);
    this.demo.PostComic(this.NewComic).subscribe(data => {
      console.log(data);
      alert("Added succesfully");

    }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewComic);
  }

  onclick(){
  this.flag=!this.flag;
   this.demo.get_comics()
  .subscribe(resdata => this.data2 = resdata);
    console.log(this.data2, "this is data2")

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



}
