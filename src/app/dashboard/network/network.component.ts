import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  constructor(public dataService: DataService, public route: Router) { }
  detail:any;
  data:any={}
  base:any={}
  ngOnInit() {
    this.get();
  }

  get(){
    this.dataService.getNet()
    .subscribe(data5 => { this.detail = data5 });
    console.log(this.detail);
  }
  
  network(value){
     this.data=value;
     console.log(value.peer);
    //  this.dataService.postnet(value);
     this.dataService.postnet(value).then((data1)=>{this.base=data1;});
    //  this.route.navigate(["/dashboard/peer"]);
    this.closemodal();
    this.get();
  }
  del(value){
    this.dataService.deletenet(value).subscribe(res=>{
      console.log(res)
    })

  

}
closemodal(){
  this.closeBtn.nativeElement.click();

}
   

} 
