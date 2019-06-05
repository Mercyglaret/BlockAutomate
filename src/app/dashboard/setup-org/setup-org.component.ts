import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-setup-org',
  templateUrl: './setup-org.component.html',
  styleUrls: ['./setup-org.component.css']
})
export class SetupOrgComponent implements OnInit {

  constructor(public dataService: DataService) { }
  orgdetail:any;
  ngOnInit() {
    this.dataService.getOrg()
    .subscribe(data6 => { this.orgdetail = data6 });
  }
  detail:any;
  db:any;
  setup(value){
    this.detail=value;
    console.log(value);
    this.dataService.postorg(value).then((data6)=>{this.db=data6;});
  }

  del(value){
    this.dataService.deleteorg(value).subscribe(res=>{
      console.log(res)
    })

}
}
