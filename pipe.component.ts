import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
name = 'gayathri says hi';
name1 = 'GAYATHRI';
salary = 20000;
person1 = {
  name:'gayathri',
  age:21,
  gender:'female'
}
DOB = new Date();
number = 0.78;
company = 'Mouritech'
  constructor() { }

  ngOnInit(): void {
  }

}
