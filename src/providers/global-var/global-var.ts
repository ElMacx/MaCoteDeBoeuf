import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarProvider {
  public cartState:array = [];
  public currentUser:any = null;
}
