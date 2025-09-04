import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPost$?:Observable<BlogPost[]>;

  constructor(private blogPostService:BlogPostService)
  {
  }

  ngOnInit(): void {
    //get all blogpost from service
    this.blogPost$ = this.blogPostService.getAllBlogpost();
  }

}
