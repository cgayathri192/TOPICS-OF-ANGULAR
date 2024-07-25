import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
firstvalue=10;
secondvalue=20;
result:any;
@ViewChild(SecondComponent)private secondcomponent!:SecondComponent
  constructor() { }
  showParentResult(res:any){
    this.result = res;
    console.log(this.result);
  }

  ngOnInit(): void {
   
  }
  ngAfterviewInit(){
    this.test()
  }
  test(){
    this.secondcomponent.mul()
  }
}
