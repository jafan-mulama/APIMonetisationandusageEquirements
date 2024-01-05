import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private loginService: LoginService) {}
  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      success => {
        if (success) {
          // Redirect or perform actions on successful login
          console.log('Login successful');
        } else {
          this.loginError = true;
        }
      },
      error => {
        console.error('An error occurred during login:', error);
        this.loginError = true;
      }
    );
  }
}
