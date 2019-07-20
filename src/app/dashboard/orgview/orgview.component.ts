import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orgview',
  templateUrl: './orgview.component.html',
  styleUrls: ['./orgview.component.css']
})
export class OrgviewComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  bind:any;
  edit:any;
  constructor(public routing:ActivatedRoute, public dataService:DataService, public route:Router) { }
  ngOnInit() {

    // this.id=this.routing.snapshot.params['id'];
    // console.log(this.id)
      this.dataService.getOrg().subscribe(data5 => { 
      this.bind = data5
      console.log(this.bind)
        });

  }
  update(value){
    this.dataService.updated(value).subscribe(res=>{
      this.edit=res;
    });
    this.closemodal();
  }
  closemodal(){
    this.closeBtn.nativeElement.click();
  }

}
 