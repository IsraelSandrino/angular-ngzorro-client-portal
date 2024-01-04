import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  passwordVisible = false;
  password?: string;

  validateForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
  })

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  login(){
    let user = this.authService.login(
      this.validateForm.value.email,
      this.validateForm.value.password
    );

    if(!user){
      alert('Usuário ou senha inválido!');
    } else {
      this.router.navigateByUrl('/private');
    }
  }
}
