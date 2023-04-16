import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  errRes: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[01215][0-9]{8}/),
    ]),
  });
  constructor(private _Router: Router, private _AuthService: AuthService) {}
  HandleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    // console.log(registerForm.value);
    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe({
        next: (res) => {
          if (res.message == 'success') {
            this.isLoading = false;
            this._Router.navigate(['/login']);
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
