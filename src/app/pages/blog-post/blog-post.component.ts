import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../modules/BlogPost";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost!: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
