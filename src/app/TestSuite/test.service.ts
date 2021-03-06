
import { Injectable } from '@angular/core/';
import { ITest } from "./test";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class TestService
{
    private testlistUrl = './api/config/test.json';

    constructor(private _http:HttpClient){}

  getTests() :Observable<ITest[]>
  {
      return this._http.get<ITest[]>(this.testlistUrl);
  }


 private handleError(err: HttpErrorResponse)
 {
     console.log(err.message);
     return Observable.throw(err.message);
 }

}