import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  data: any;

  constructor() { }

  post(value){
    this.data=value;
  }
  get(){
    return this.data;
  }
}
