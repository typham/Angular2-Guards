import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  private subject = new Subject<any>();
  constructor() { }

  changeMenuState(){
    this.subject.next();
  }

  stateChange():Observable<any>{
    return this.subject.asObservable();
  }

}
