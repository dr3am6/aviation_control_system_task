import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor() { 

  }
  clock=""
  clockHandle: any;


  ngOnInit() {
    // Using Basic Interval
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleString();
    },1000);

    
  }


}
