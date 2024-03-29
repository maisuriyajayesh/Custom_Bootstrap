import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _http: HttpClient, private _toast: ToastService, private loginser: LoginServiceService) { }

  login: FormGroup | any;

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(''), // Assuming email is the correct form control name
      'password': new FormControl('')
    });
  }

  logindata(login: FormGroup) {

    this.loginser.logingUser(login).subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email === this.login.value.email && a.password === this.login.value.password;
      });
      if (user) {
        alert('You are successfully logged in');
        this.login.reset();
        this._router.navigate(['/dashboard']);
      } else {

        alert('User Not Found');
        this._router.navigate(['/login']);
      }
    })
  }


}
