import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceseriesService {


  baseurl: string = 'http://192.168.15.41:3000/api/v1/post_series';
  _url: string = 'http://192.168.15.41:3000/api/v1/post_season';
  _url2: string = 'http://192.168.15.41:3000/api/v1/post_comic';
  // _url3='http://localhost:2000/api/v1/post_series/a';
  _url3 = 'http://192.168.15.41:3000/api/v1/searchusers';
  url4 = 'http://192.168.15.41:3000/api/v1/searchusers/xx';
  url5 = 'http://192.168.15.41:3000/api/v1/delete_user/a/';
  url7 = 'http://192.168.15.41:3000/api/v1/post_series/a';
  url8 = 'http://192.168.15.41:3000/api/v1/search_comic/a/';
  url88 = 'http://192.168.15.41:3000/api/v1/post_series/a';
  urlcomic = 'http://192.168.15.41:3000/api/v1/post_comic';
  url99 = 'http://192.168.15.41:3000/api/v1/post_series/a';
  url888 = 'http://192.168.15.41:3000/api/v1/post_comic/iii';
  urla = 'http://localhost:3000/api/v1/delete_comic/';
  // url8 = 'http://localhost:3000/v1/search_comic/a/';
  variable: string;
  JWT;
  constructor(public httpService: Http) { }

  get_series(): Observable<any> {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.baseurl, options).map(
      res => res.json()
    );
  }
  get_seasons(): Observable<any> {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this._url, options).map(
      res => res.json()
    );
  }

  get_users(): Observable<any> {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.url88, options).map(
      res => res.json()
    );
  }
  get_comics(): Observable<any> {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)

    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this._url2, options).map(
      res => res.json()
    );
  }
  // get_users(): Observable<any> {

  //   return this.httpService.get(this.url7).map(
  //     res => res.json()
  //   );
  // }

  //get function of status
  search6(search): Observable<any> {
    console.log(search)
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this._url3 + search, options).map(
      data => data.json()
    );

  }
  //search function of status
  loginusers(form): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log(form, "service")
    return this.httpService.post(this._url3, form, headers)
      .map((res => res.json()));
  }

  superupdate(form): Observable<any> {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers });
    console.log(form, "service")
    return this.httpService.put(this.url4, form, options)
      .map((res => res.json()));

  }

  DeleteUsers(form) {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers })

    console.log(form, "hey");
    console.log(this.url5)
    return this.httpService.delete(this.url5 + form, options).map(
      (res: Response) => res.json());
  }
  // DeleteComic(form) {

  //     console.log(form, "hey");
  //     return this.httpService.delete(this.url888+ form).map(
  //       (res: Response) => res.json());
  //   }

  Delete_Comic(form) {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers })

    console.log(form, "comic1");
    console.log(this.urla)
    return this.httpService.delete(this.urla + form, options).map(
      (res: Response) => res.json()
    );
  }
  PostComic(Data) {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers })


    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.urlcomic, Data,options).map(
      (res: Response) => res.json());
  }

  Adduser(Data) {
    this.JWT = localStorage.getItem('token')
    console.log(this.JWT)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + this.JWT)
    let options = new RequestOptions({ headers: headers })

    console.log(Data);
    return this.httpService.post(this.url99, Data, options).map(
      (res: Response) => res.json());
  }

  search(a): Observable<any> {
    console.log(a, "in service")
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //       let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.url8 + a).map(
      data => data.json()
    );
  }


}