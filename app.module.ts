import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NamesComponent } from './names/names.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { FormsComponent } from './forms/forms.component';
import { MainComponent } from './main/main.component';
import { MainInterceptor } from './main.interceptor';
import { BasicComponent } from './basic/basic.component';
import { BasicInterceptor } from './basic.interceptor';
import { PipeComponent } from './pipe/pipe.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TestPipe } from './test.pipe';
import { TestComponent } from './test/test.component';
import { TemplateComponent } from './template/template.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestService } from './test.service';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NamesComponent,
    ClassComponent,
    StyleComponent,
    FormsComponent,
    MainComponent,
    BasicComponent,
    PipeComponent,
    DatabindingComponent,
    DirectivesComponent,
    TestPipe,
    TestComponent,
    TemplateComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PagenotfoundComponent,
    ThirdComponent,
    FourComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    TestService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MainInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:BasicInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
