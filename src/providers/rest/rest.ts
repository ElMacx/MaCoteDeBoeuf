import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVarProvider } from '../global-var/global-var';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "https://macotedeboeuf.firebaseio.com";
  constructor(public http: HttpClient, public globalVar: GlobalVarProvider) {
  }

  addUser({ name, firstname, phone, mail }) {
    return new Promise(resolve => {
      this.http.put(this.apiUrl+'/users/' + this.globalVar.currentUser.uid + '.json', { name: name, firstname: firstname, phone: phone, mail: mail }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/products.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getOrders() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/orders/' + this.globalVar.currentUser.uid + '.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
