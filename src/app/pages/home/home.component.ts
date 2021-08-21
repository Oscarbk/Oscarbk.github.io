import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../modules/BlogPost";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'shpe-website';
  blogPosts: BlogPost[] = [];
  images = [
    "assets/images/carousel/zoom.jpg",
    "assets/images/carousel/zoom1.png",
    "assets/images/carousel/zoom2.png",
    "assets/images/carousel/zoom3.png",
    "assets/images/carousel/zoom4.png"
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

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
      imageUrl: "assets/images/shpeJr.jpg",
      date: "Date TBA",
      title: "SHPE Jr.",
      body: "Networking Night with SHPE Jr @ School Without Walls",
      link: "https://www.shpe.org/students/junior-chapters"
    }];
  }

}
