import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../modules/BlogPost";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
      body: "SHPE's National Convention is the largest gathering of Hispanic STEM professionals and students. This year, it will take place in Orlando, Florida. You won't want to miss this amazing opportunity!",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc84VHawV88LodE-M8FK-F9UuOAqUxfJm4zxAtiNqadYyee-A/viewform"
    }, {
      imageUrl: "assets/images/mentor banner.png",
      date: "August 8",
      title: "GWU MentorSHPE Program",
      body: "You can sign up to become a mentor and help a mentee navigate through their college classes, possible internships, and support their growth and development.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfB2BaFT_nKwb7KkR-i7w4zp1p_4ukBbBFiZKRpCxC_WlkAqA/viewform"
    }, {
      imageUrl: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
      date: "December 12",
      title: "Last Day of Classes",
      body: "Happy holidays",
      link: ""
    }, {
      imageUrl: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
      date: "January 15",
      title: "Start of Spring Semester",
      body: "This is a blog post for the first day of the spring semester",
      link: ""
    }];
  }

}
