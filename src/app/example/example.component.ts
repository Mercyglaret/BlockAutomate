import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  coll=document.getElementsByClassName("accordion");
 
  constructor() { }

  ngOnInit() {
    this.get()
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

