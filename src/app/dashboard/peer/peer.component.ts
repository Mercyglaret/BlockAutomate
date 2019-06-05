import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css']
})
export class PeerComponent implements OnInit {

 
  constructor(public dataService: DataService,public shareService: ShareService) { }
  detail:any={
    peer:'',
    user:''
  }
  // bind:any={
  //   peer:"",
  //   user:""
  // }
  

  ngOnInit() {
    var text="";
    // this.detail=this.shareService.get();
    // this.dataService.getnet()
    //   .subscribe(data => { this.detail = data });
    console.log(this.detail)
    for (let i=1;i<=this.detail.peer;i++){
         text +="network" + i + "<button>net</button>"+"<br>";
    }
    document.getElementById("demo").innerHTML=text;
    // for(let i=0; i<this.detail.length; i++){
    //  this.bind.peer==this.detail.peer
    //  this.bind.user==this.detail.user
    // }
    
  }
}
  