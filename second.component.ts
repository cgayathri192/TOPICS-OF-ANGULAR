import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
@Input() primary:any;
@Input()secondary:any;
@Output() result = new EventEmitter();
test1 = 10;
test2 = 20;
  constructor() { }

  ngOnInit(): void {
    console.log(this.primary,this.secondary);
  }
  add(){
    let res = this.primary + this.secondary;
    this.result.emit(res)
  }
  mul(){
    let res = 10-20;
    console.log(res)
  }

}
