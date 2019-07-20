import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _dataService: DataService, public _routing: Router) { }
  detail: any;

  ngOnInit() {
    // this._dataService.getData()
    //   .subscribe(data1 => { this.detail = data1 });
    //   console.log(this.detail)
    this._dataService.getData().subscribe(data1 => { 
      this.detail = data1
    console.log(this.detail)
});
}
  logfun(value) {
    // this.logindata=value;
    for (let i = 0; i < this.detail.length; i++){
      if (value.email !== this.detail[i].email) {
        Swal.fire({
          type: 'error',
          title: 'incorrect...',
          text: 'Email incorrect!',
        });
      }
      else if(value.password !== this.detail[i].password){
        Swal.fire({
          type: 'error',
          title: 'incorrect...',
          text: 'Password incorrect!',
        });
      }
      else {
        this._routing.navigate(['/dashboard/network']);
        break;
      }
    //   if(value.email==this.detail[i].email){
    //     if(value.password==this.detail[i].password){
    //       this._routing.navigate(['/dashboard/network']);
    //     }else{
    //       Swal.fire({
    //             type: 'error',
    //             title: 'incorrect...',
    //             text: 'Password incorrect!',
    //           });
    //     }
    //   }else{
    //     Swal.fire({
    //           type: 'error',
    //           title: 'incorrect...',
    //           text: 'Email incorrect!',
    //         });
    //   }
      // if (!this.detail) {
      //   Swal.fire({
      //               type: 'error',
      //               title: 'incorrect...',
      //               text: 'Email incorrect!',
      //             });
      // } else if(this.detail){
      //   if(value.password !== this.detail[i].password){
      //     Swal.fire({
      //                   type: 'error',
      //                   title: 'incorrect...',
      //                   text: 'Password incorrect!',
      //                 });
      //   } else{
      //     this._routing.navigate(['/dashboard/network']);
      //     break;
      //   }
      // }
     
    }

  }
}

