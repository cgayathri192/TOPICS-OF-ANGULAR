import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NamesComponent } from './names/names.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { FormsComponent } from './forms/forms.component';
import { MainComponent } from './main/main.component';
import { BasicComponent } from './basic/basic.component';
import { PipeComponent } from './pipe/pipe.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TestComponent } from './test/test.component';
import { TemplateComponent } from './template/template.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';


const routes: Routes = [
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'names',
    component:NamesComponent
  },
  {
    path:'class',
    component:ClassComponent
  },
  {
    path:'style',
    component:StyleComponent
  },
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'basic',
    component:BasicComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'databinding',
    component:DatabindingComponent
  },
  {
    path:'directives',
    component:DirectivesComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'template',
    component:TemplateComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  // {
  //   path:'**',component:PagenotfoundComponent
  // },
  {
    path:'third',
    component:ThirdComponent
  },
  {
    path:'four',
    component:FourComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
