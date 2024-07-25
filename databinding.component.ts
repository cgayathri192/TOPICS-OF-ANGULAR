import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
city:string = "Hyderabad"; //stringInterpolation
cname:string = "special pecial"; //stringInterpolation
d:string = new Date().toLocaleTimeString(); //stringInterpolation
     timeid = setInterval(()=>{
      this.d = new Date().toLocaleTimeString();
     },1000) //stringInterpolation
isdisabled:boolean = true; //propertybinding
ishidden:boolean = false; //propertybinding
isactive:boolean = false; //classBinding
applyc1:boolean = true; //classBinding
cvar:string = 'lightblue' //styleBinding
mystyle:object = {
  color:'white',
  background:'grey',
  border:'5px solid blue'
}  //styleBinding
hasError:boolean = false; //styleBinding
counter:number = 0; //eventBinding
name = "ABc" //eventbinding
city1 = "Hyderabad" //TwowayDataBinding
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.counter+=1
  }   //eventBinding
  decrement(){
    this.counter-=1 
  }  //eventBinding
  changeName(e:any){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    this.name = e.target.value
  } //eventbinding
  updatecity1(){
    this.city1 = "Bangalore" 
  } //TwowayDataBinding
}
