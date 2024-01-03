import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from './toast.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ClipboardModule } from 'ngx-clipboard';
import { LoginDemoComponent } from './All-Demos/login-demo/login-demo.component';
import { CheckBoxRadioButtonComponent } from './All-Demos/check-box-radio-button/check-box-radio-button.component';
import { AccordionComponent } from './All-Demos/accordion/accordion.component';
import { HeaderInsideComponent } from './header-inside/header-inside.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    LoginDemoComponent,
    CheckBoxRadioButtonComponent,
    AccordionComponent,
    HeaderInsideComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
