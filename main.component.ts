import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ser:MainService) { }

  ngOnInit(): void {
  }
  getdata(){
   this.ser.get().subscribe((d=>{
    console.log(d)
   }))
  }
}
