import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public _dataService: DataService , public routing: Router) { }
  ngOnInit() {
  }
  db:any;
fun(value){
this._dataService.postData(value).then((data)=>{this.db=data;});
Swal.fire({
  type: 'success',
  title: 'Signup successfully....',
  text: 'Please click signin button to Login...',
})
this.routing.navigate(['/login'])
}



}
 