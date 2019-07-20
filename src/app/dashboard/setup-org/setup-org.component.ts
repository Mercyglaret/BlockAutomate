import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setup-org',
  templateUrl: './setup-org.component.html',
  styleUrls: ['./setup-org.component.css']
})
export class SetupOrgComponent implements OnInit {
  @ViewChild("closeBtn") closeBtn : ElementRef;
  constructor(public dataService: DataService, public route: Router) { }
  orgdetail:any;
  detail:any;
  db:any;
  isSubmittingForm: boolean = false;
  ngOnInit() {
    this.dataService.getOrg()
    .subscribe(data6 => { this.orgdetail = data6 });
  }
 
  setup(value){
    this.isSubmittingForm = true;
    this.dataService.postorg(value).then((data1)=>{
       this.isSubmittingForm = false;
       this.closemodal();
       this.ngOnInit();
      this.route.navigate(["dashboard/orgview"]);

       this.detail = {};
      }).catch(() =>  {
        // Handle error here id anything wrong with the network
        this.isSubmittingForm = false;
        this.closemodal();
        this.detail = {};
      });
    // this.dataService.postorg(value).then((data6)=>{this.db=data6;});
  }

  delorg(value){
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
        this.dataService.deleteorg(value).subscribe(res=>{
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
    // vieworg(){
    //   this.route.navigate(["dashboard/networkview"])
    // }
}
