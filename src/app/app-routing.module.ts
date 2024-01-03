import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginDemoComponent } from './All-Demos/login-demo/login-demo.component';
import { CheckBoxRadioButtonComponent } from './All-Demos/check-box-radio-button/check-box-radio-button.component';
import { AccordionComponent } from './All-Demos/accordion/accordion.component';
 

const routes: Routes = [
  //{redirectTo: '', path:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent, data: { title: 'Dashboard' }},
  {path:'login-demo', component:LoginDemoComponent, data: { title: 'Login Demo' }},
  {path:'check-box-radio-button', component:CheckBoxRadioButtonComponent, data: { title: 'Check Box Radio Button' }},
  {path:'accordion', component:AccordionComponent, data: { title: 'Accordion' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
