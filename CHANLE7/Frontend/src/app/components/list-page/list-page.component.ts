import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  forms?: Post[] = [];
  constructor(private route: Router, private http: HttpClient, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7136/api/Post/ListPosts')
    .subscribe({
      next: (data: Post[]) => {
        this.forms = data;
        console.log(this.forms);
      }
    })
  }

  editPost(post: Post): void {
    // this.router.navigate(['/edit-post', post.id]);
  }

  deletePost(post: Post): void {
    alert('Successfully Deleted');
    const deleteUrl = `https://localhost:7136/api/Post/deleteemployee/${post.id}`;

    const headers = {
      Authorization: `Bearer ${this.tokenStorage.getToken()}`
    };

    this.http.delete(deleteUrl, { headers }).subscribe(() => this.initData());
    this.route.navigate(['/home-page']);
  }
}
