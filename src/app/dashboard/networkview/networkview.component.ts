import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-networkview',
  templateUrl: './networkview.component.html',
  styleUrls: ['./networkview.component.css']
})
export class NetworkviewComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  bind:any;
  Bind:any;
  data:any;
  otherorg:any;
  peerdetail:any;
  channeldetail: any;
  id:any;
  orderdetail:any;
  result:any={
    Id:'',
    Netname:'',
    Type:'',
    Norg:''
  };
  isSubmittingForm: boolean = false;
  coll=document.getElementsByClassName("accordion");

  constructor(public routing:ActivatedRoute, public dataService:DataService, public route:Router) { }
  ngOnInit() {
    this.get();
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
      this.dataService.getNet().subscribe(data5 => { 
        this.bind = data5
    console.log(this.bind)

      for(let i=0;i<this.bind.length;i++){
        if(this.id===this.bind[i].id){
          this.result.Id=this.bind[i].id;
          this.result.Netname=this.bind[i].netname;
         this.result.Type=this.bind[i].type;
         this.result.Norg=this.bind[i].norg;
        }
        
       }
      });

      this.dataService.getOrg().subscribe(data5 => { 
        this.Bind = data5
        console.log(this.Bind)
          });

      this.dataService.getAOrg().subscribe(data6 => { 
        this.otherorg = data6
        console.log(this.otherorg)
          }); 
    
      this.dataService.getChannel().subscribe(data7 => { 
      this.channeldetail = data7
      console.log(this.channeldetail)
              });       
  }


AddOrg(value){
  this.isSubmittingForm = true;
   this.dataService.postAorg(value).then((data1)=>{
     this.isSubmittingForm = false;
     this.closemodal();
     this.ngOnInit();
     this.data = {};
    }).catch(() =>  {
      // Handle error here id anything wrong with the network
      this.isSubmittingForm = false;
      this.closemodal();
      this.data = {};
    });
  
}

AddChannel(value){
  console.log(value);
  
  this.isSubmittingForm = true;
   this.dataService.postChannel(value).then((data1)=>{
     this.isSubmittingForm = false;
     this.closemodal();
     this.ngOnInit();
     this.data = {};
    }).catch(() =>  {
      // Handle error here id anything wrong with the network
      this.isSubmittingForm = false;
      this.closemodal();
      this.data = {};
    });
  
}





delAorg(value){

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
      this.isSubmittingForm = true;
      this.dataService.deleteAorg(value).subscribe(res=>{
        this.isSubmittingForm = false;
        this.ngOnInit();
      })
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
 
}








closemodal(){
  this.closeBtn.nativeElement.click();
}

get(){
  for (let i = 0; i < this.coll.length; i++) {
    this.coll[i].addEventListener("click", function() {
        this.classList.toggle("activetoggle");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
}

}

  