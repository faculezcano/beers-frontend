import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'my-auto',
  },
})
export class LoginComponent {
  public loading = false;
  public error = false;

  constructor(private authService: AuthService, private router: Router) {
    authService.user.subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  loginClick(email: string, password: string) {
    this.loading = true;
    this.error = false;
    this.authService
      .login(email, password)
      .catch((error) => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
