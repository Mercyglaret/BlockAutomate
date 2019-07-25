import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orgview',
  templateUrl: './orgview.component.html',
  styleUrls: ['./orgview.component.css']
})
export class OrgviewComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  @ViewChild("closeBtn1") closeBtn1 : ElementRef;
  @ViewChild("closeBtn2") closeBtn2 : ElementRef;
  @ViewChild("closeBtn3") closeBtn3 : ElementRef;
  bind:any;
  edit:any;
  data:any;

  isSubmittingForm: boolean = false;
  peerdetail: any;
  data1: {};
  data2: {};
  orderdetail: any;
  userdetail: any;
  constructor(public routing:ActivatedRoute, public dataService:DataService, public route:Router) { }
  coll=document.getElementsByClassName("accordion");

  ngOnInit() {
    this.get();
    // this.id=this.routing.snapshot.params['id'];
    // console.log(this.id)
      this.dataService.getOrg().subscribe(data5 => { 
      this.bind = data5
      console.log(this.bind)
        });
      this.dataService.getPeer().subscribe(data7 => { 
      this.peerdetail = data7
      console.log(this.peerdetail.length)
        });
      this.dataService.getOrder().subscribe(data8 => { 
      this.orderdetail = data8
      console.log(this.orderdetail)
        }); 
      this.dataService.getUser().subscribe(data9 => { 
      this.userdetail = data9
      console.log(this.userdetail)
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
  closemodal1(){
    this.closeBtn1.nativeElement.click();
  }
  closemodal2(){
    this.closeBtn2.nativeElement.click();
  }
  closemodal3(){
    this.closeBtn3.nativeElement.click();
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


  AddPeer(value){
    console.log(value);
    
    this.isSubmittingForm = true;
     this.dataService.postPeer(value).then((data1)=>{
       this.isSubmittingForm = false;
       this.closemodal1();
       this.ngOnInit();
       this.data1 = {};
      }).catch(() =>  {
        // Handle error here id anything wrong with the network
        this.isSubmittingForm = false;
        this.closemodal1();
        this.data2 = {};
      });
    
  }

  AddOrder(value){
    console.log(value);
    
    this.isSubmittingForm = true;
     this.dataService.postOrder(value).then((data1)=>{
       this.isSubmittingForm = false;
       this.closemodal2();
       this.ngOnInit();
       this.data = {};
      }).catch(() =>  {
        // Handle error here id anything wrong with the network
        this.isSubmittingForm = false;
        this.closemodal2();
        this.data = {};
      });
    
  }

  AddUser(value){
    console.log(value);
    
    this.isSubmittingForm = true;
     this.dataService.postUser(value).then((data1)=>{
       this.isSubmittingForm = false;
       this.closemodal3();
       this.ngOnInit();
       this.data = {};
      }).catch(() =>  {
        // Handle error here id anything wrong with the network
        this.isSubmittingForm = false;
        this.closemodal3();
        this.data = {};
      });
    
  }

  delOrder(value){

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
        this.dataService.deleteOrder(value).subscribe(res=>{
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
  
  

  delPeer(value){

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
        this.dataService.deletePeer(value).subscribe(res=>{
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
  

  
  delUser(value){

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
        this.dataService.deleteUser(value).subscribe(res=>{
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
  


}


