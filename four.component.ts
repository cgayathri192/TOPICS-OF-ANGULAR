import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
@Input()primary:any;
@Input()secondary:any;
@Output()result = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.primary,this.secondary)
  }
  add(){
    let res = this.primary + this.secondary;
    this.result.emit(res)
  }

}
