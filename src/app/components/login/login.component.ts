import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading: boolean = false;
  errRes: string = '';
  loginForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  
   
  });
  constructor(private _Router: Router, private _AuthService: AuthService) {}
  HandleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    // console.log(loginForm.value);
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        next: (res) => {
          if (res.message == 'success') {
            localStorage.setItem("token",res.token)
            this._AuthService.DecodeUserData()
            this.isLoading = false;
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errRes = err.error.message;
        },
      });
    }

  }

}
