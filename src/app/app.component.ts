import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'bg-light',
  },
})
export class AppComponent implements OnInit {
  title = 'beers';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.accessToken) {
      this.authService.getUser();
    }
  }
}
