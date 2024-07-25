import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {
data = [
 {
  name:'gayathri',
  age:21,
  gender:'female'
 },
 {
  name:'devi',
  age:22,
  gender:'female'
 } 
];
names = ["abc","sesuh","swkjkhl"]
  constructor() { }

  ngOnInit(): void {
  }

}
