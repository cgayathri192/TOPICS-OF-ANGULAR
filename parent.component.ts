import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
firstvalue = 20;
secondvalue = 50;
result:any;
   constructor() { }
  showParentResult(res:any){
    this.result = res;
    console.log(this.result);
  }

  ngOnInit(): void {
  }

}
