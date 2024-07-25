import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private ser:BasicService) { }

  ngOnInit(): void {
  }
  getdata(){
    this.ser.get().subscribe((d=>{
      console.log(d);
    }))
  }

}
