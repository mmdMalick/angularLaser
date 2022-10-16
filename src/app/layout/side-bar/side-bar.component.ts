import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isCoupure:boolean=false;
  isCoupure1:boolean=false;
  isCoupure2:boolean=false;
  isCoupure3:boolean=false;
  isCoupure4:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showCoupuresContent(){
    if(this.isCoupure){
      this.isCoupure=false;
    }else{
      this.isCoupure=true;
    }
  }
  showCoupuresContent1(){
    if(this.isCoupure1){
      this.isCoupure1=false;
    }else{
      this.isCoupure1=true;
    }
  }


}
