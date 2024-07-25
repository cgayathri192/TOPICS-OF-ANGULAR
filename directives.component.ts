import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
show= true; //ngIf
movies = ["RRR","Darling","Mirchi"] //ngFor
showHead = true; //ngIf
data = ['Nellore','Vizag','rapur'] //ngIfelse
nums = [1,2,3,4,5,6,7,8,9,10] //ngFor
mobiles = [
  {
    "id":1,
    "name":"redmi",
    "price":12000,
    "ram":"8gb",
    "storage":"64gb"
  },
  {
    "id":2,
    "name":"realme",
    "price":17000,
    "ram":"8gb",
    "storage":"128gb"
  },
  {
    "id":3,
    "name":"oppo",
    "price":15000,
    "ram":"8gb",
    "storage":"64gb"
  },
  {
    "id":4,
    "name":"vivo",
    "price":20000,
    "ram":"8gb",
    "storage":"128gb"
  },
  {
    "id":5,
    "name":"samsung",
    "price":10000,
    "ram":"8gb",
    "storage":"64gb"
  } 
] //ngFor
num1:number = 4;//ngSwitch
num2:number = 6;//ngSwitch
op:string='' //ngSwitch
  constructor() { }

  ngOnInit(): void {
  }

}
