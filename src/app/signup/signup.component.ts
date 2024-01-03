import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private _router: Router, private _http: HttpClient, private _toast: ToastService, private loginser: LoginServiceService) { }

  signup: FormGroup | any;
  signuser: any;

  ngOnInit(): void {
    this.signup = this.fb.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  signupdata(signup: any) {
    // Check if any required fields are empty
    if (!signup.fname || !signup.lname || !signup.email || !signup.password) {
      this._toast.showError("Please fill in all required fields.");
      return; // Stop further processing
    }
  
    // Continue with the HTTP request only if all required fields are filled
    this.loginser.createUser(signup).subscribe(
      (res) => {
        //console.log('Response:', res);
  
        if (res !== "") {
          this._toast.showSuccess("Record added!");
          this.signup.reset();
          this._router.navigate(['/login']);
        } else {
          this._toast.showError("Some error occurred!");
        }
      },
      (error) => {
        //console.error('Error during signup:', error);
        this._toast.showError('An unexpected error occurred. Please try again later.');
      }
    );
  }  
}
