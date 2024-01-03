import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.scss']
})
export class LoginDemoComponent implements OnInit {
  public Copycode: string = `
  <form>
    <div class="mb-3">
        <label for="Email" class="form-label">Email Id</label>
        <input type="text" class="form-control" id="Email">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3">
        <span>Create New Account <a href="#">Signup</a></span>
    </div>
  <button type="submit" class="btn btn-primary">Login</button>
  </form>
  `;

  constructor() { }
  ngOnInit(): void {


  }
}
