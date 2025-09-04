import { Injectable } from '@angular/core';
import { AddBlogPost } from '../model/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogPostService{

  constructor(private http: HttpClient) { }
  createBlogPost(data:AddBlogPost) : Observable<BlogPost>
  {
    return this.http.post<BlogPost>(`${environment.apibaseUrl}/api/BlogPosts`,data);
  }

  getAllBlogpost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apibaseUrl}/api/BlogPosts`);
  }
}
