import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetdataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetdataProvider Provider');
  }
  // getData(){
  //   return this.http.get('http://localhost:8080/api/tasks')
  //       .map(response => response.j);
  // }
  getData(){
    return new Promise(resolve =>{
      this.http.get('http://localhost:8080/api/tasks').subscribe(data=>{
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
   }

}
