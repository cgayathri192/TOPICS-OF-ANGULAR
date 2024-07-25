import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  registrationForm:any;
  countries=["india","america","australia"]
  constructor(private fb:FormBuilder) { 
    this.registrationForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      email:['',[Validators.required]],
      password:'',
      gender:'',
      country:'',
      dob:'',
      terms:''
     })
  }
  get registrationFormErrors(){
    return this.registrationForm.controls
  }


  ngOnInit(): void {
  }
  register(){
    console.log(this.registrationForm.value)
    console.log(this.registrationFormErrors.controls)
  }



}

