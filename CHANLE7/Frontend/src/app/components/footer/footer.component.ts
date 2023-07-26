import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'Footer'

  constructor(private route: Router, private http: HttpClient){}

}

