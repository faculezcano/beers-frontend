import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loginClick(email: string, password: string) {
    this.loading = true;
    this.authService.login(email, password);
  }

}
