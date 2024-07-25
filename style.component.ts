import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
cvar:string="red";
mystyle:object={
 color:'pink',
 background:'grey',
 border:'5px solid grey'
}
hasError:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
