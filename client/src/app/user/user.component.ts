import { Component, OnInit } from '@angular/core';
import{RouterModule, Routes,Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
click3(){

  this.router.navigate(['/comic']);
}
logout(){
  localStorage.clear();
   this.router.navigate(["/"]);
}
}