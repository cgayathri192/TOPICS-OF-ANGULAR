import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p:any,wish1:string): string{
    if(p.gender=="female"){
      return `Hello miss ${p.name} ${wish1}`
    }
    else{
      return `Hello Mr ${p.name} ${wish1}`
    }
    
  }

}
