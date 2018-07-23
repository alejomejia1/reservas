import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  // apiUrl = 'https://jsonplaceholder.typicode.com';
  apiUrl = 'http://sing.com.co/colina/api'

  getIngresos(fechaini, fechafin, apiKey) {

  console.log(fechaini);

  // if (this.data) {
  //   return Promise.resolve(this.data);
  // }

  return new Promise(resolve => {
  	this.http.get(this.apiUrl+'/pagos/ingresos?fechaini='+fechaini+'&fechafin='+fechafin+'&apiKey='+apiKey)
      .map((response:Response) => response)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  })
  }

}
