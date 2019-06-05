import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public _dataService: DataService) { }
  ngOnInit() {
  }
  db:any;
fun(value){
this._dataService.postData(value).then((data)=>{this.db=data;});
console.log(value);
}
}
 