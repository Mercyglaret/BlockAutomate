import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orgdetail: any;

  constructor(public _dataService: DataService, public route: Router) { }

  ngOnInit() {
   

  }
  findval(){
    this._dataService.getOrg().subscribe(res => { 
      this.orgdetail = res
      console.log(this.orgdetail);
  
if(this.orgdetail.length > 0 ){
      this.route.navigate(["dashboard/orgview"]);
}
else{
  this.route.navigate(["dashboard/setup_myorg"]);

}
}); 

  }
}
