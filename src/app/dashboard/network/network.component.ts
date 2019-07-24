import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import * as $ from 'jquery';

declare var $:any;
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
  base:any={};
  isSubmittingForm: boolean = false;
  coll=document.getElementsByClassName("accordion");

  ngOnInit() {
    this.getNetworkData();
    this.get();

  }

  getNetworkData(){
    this.dataService.getNet().subscribe(data5 => { 
      this.detail = data5
    });
  }
  
  addNetwork(value){
    this.isSubmittingForm = true;
    //  console.log(value.peer);
    //  this.dataService.postnet(value);
     this.dataService.postnet(value).then((data1)=>{
      //  this.base=data1;
       this.isSubmittingForm = false;
       this.closemodal();
       this.getNetworkData();
       this.data = {};
       //  this.route.navigate(["/dashboard/peer"]);
      }).catch(() =>  {
        // Handle error here id anything wrong with the network
        this.isSubmittingForm = false;
        this.closemodal();
        this.data = {};
      });
  }

  deleteNetworkData(value){

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
        this.dataService.deletenet(value).subscribe(res=>{
          this.isSubmittingForm = false;
          this.getNetworkData();
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
  // ViewNetworkData(value){
  //   this.dataService.getNet().subscribe(data5 => { 
  //     this.detail = data5
  //     console.log(this.detail)
  //     this.route.navigate(["/dashboard/networkview"])

  //   });
  //  } 
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
