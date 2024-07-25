import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public ts:TestService) { }
  // mobiles = this.ts.mobiles
  ngOnInit(): void {
  }
  addMobile(){
    this.ts.mobiles.push("vivo")
  }

}
