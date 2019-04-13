import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this._authService.loginUser(email, password);
      this._router.navigate(['/']);
    } catch(error) {
      console.log(error);
      this.error = error.message;
    }
  }

}
