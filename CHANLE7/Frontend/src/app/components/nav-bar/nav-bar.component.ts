import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'Navigation Bar';
  userKey: string | null = window.sessionStorage.getItem('USER_KEY');
  tokenKey: string | null = window.sessionStorage.getItem('TOKEN_KEY');

  constructor(private route: Router, private tokenStorage: TokenStorageService, private http: HttpClient) {}

  login(): void {
    this.route.navigate(['login']);
  }

  register(): void {
    this.route.navigate(['register']);
  }

  logout(): void {
    alert('Logged Out Successfully');
    this.tokenStorage.signOut();
  }
}
