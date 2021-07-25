import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../modules/BlogPost";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'shpe-website';
  blogPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {
    // TODO: set up blogPosts array to be fetched by api call from firebase
    this.blogPosts = [{
      imageUrl: "assets/images/shpe.png",
      date: "November 10 - 14",
      title: "SHPE National Convention",
      body: "SHPE's National Convention is the largest gathering of Hispanic STEM professionals and students. This year, it will take place in Orlando, Florida. You won't want to miss this amazing opportunity!"
    }, {
      imageUrl: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
      date: "August 27",
      title: "Register for thing",
      body: "Register for the upcoming event that is coming"
    }, {
      imageUrl: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
      date: "December 12",
      title: "Last Day of Classes",
      body: "Happy holidays"
    }, {
      imageUrl: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
      date: "January 15",
      title: "Start of Spring Semester",
      body: "This is a blog post for the first day of the spring semester"
    }];
  }

}
