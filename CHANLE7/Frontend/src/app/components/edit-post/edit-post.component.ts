import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Post } from 'src/app/models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  userKey: string | null = window.sessionStorage.getItem('USER_KEY');
  postId: number = 0;
  form: any = {
    id: null,
    adminId: this.userKey,
    position: null,
    lastName: null,
    firstName: null,
    currentPay: null,
    dateJoined: null
  }

  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute, private tokenStorage: TokenStorageService){}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.postId = +params['postId'];
      this.getEmployeeDetails(this.postId);
    });
  }

  getEmployeeDetails(postId: number): void {
    this.http.get<Post>(`https://localhost:7136/api/Post/${postId}`, {
      headers: { Authorization: `Bearer ${this.tokenStorage.getToken()}` }
    }).subscribe(
      data => {
        this.form = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    const { id, position, lastName, firstName, currentPay, dateJoined } = this.form;

    this.http.put(`https://localhost:7136/api/Post/updateemployee/${id}`, this.form, {
      headers: { Authorization: `Bearer ${this.tokenStorage.getToken()}` }
    }).subscribe(
      data => {
        this.route.navigate(['/list-page']);
      },
      error => {
        console.log(error);
        alert('Update Employee Success');
        this.route.navigate(['/list-page']);
      }
    );
  }
}
