import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _dataService: DataService, public _routing: Router) { }
  detail: any;

  ngOnInit() {
    this._dataService.getData()
      .subscribe(data => { this.detail = data });
  }
  logindata: any;

  logfun(value) {
    // this.logindata=value; 
    for (let i = 0; i < this.detail.length; i++){
      if (value.email == this.detail[i].email) {
        if(value.password == this.detail[i].password){
        this._routing.navigate(['/dashboard/network'])
      }
      else {
        alert("password incorrect")
      }
    }
  }
  }
}
