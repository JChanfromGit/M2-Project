import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  form: any = {
    username: null,
    lastName: null,
    firstName: null,
    nickName: null,
    email: null,
    password: null
  }

  constructor(private http: HttpClient, private route: Router){}

  ngOnInit(): void {

  }

  onSubmit(): void {

    const {username, password, firstName, lastName} = this.form;

    this.http.post("https://localhost:7136/api/Login/register", this.form, {responseType: 'text'}).subscribe(data => {
      alert('Registration Success');
      this.route.navigate(['login']);
    })

  }

}
