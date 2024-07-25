import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
email="";
  constructor() { }

  ngOnInit(): void {
  }
  updateEmail(ip:string){
     this.email=ip;
  }

}
