import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form: any = {
    position: null,
    lastName: null,
    firstName: null,
    currentPay: null,
    dateJoined: null
  }

  constructor(private http: HttpClient, private route: Router, private tokenStorage: TokenStorageService){}

  ngOnInit(): void {

  }

  onSubmit(): void {

    const {position, lastName, firstName, currentPay, dateJoined} = this.form;

    this.http.post("https://localhost:7136/api/Post/addemployee", this.form, {responseType: 'text', headers: {Authorization: `Bearer ${this.tokenStorage.getToken()}`} }).subscribe(data => {
      this.route.navigate(['/list-page']);
    })
    alert('Add Employee Success');

  }

}
