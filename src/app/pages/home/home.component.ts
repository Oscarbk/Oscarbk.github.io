import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../modules/BlogPost";
import {CalendarOptions} from "@fullcalendar/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'shpe-website';
  blogPosts: BlogPost[] = [];
  calendarOptions!: CalendarOptions;
  Events = [];

  constructor() { }

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr)
  }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.Events
    };
    // TODO: set up blogPosts array to be fetched by api call from firebase
    this.blogPosts = [{
      imageUrl: "",
      date: "August 1",
      title: "Test title",
      body: "lorem ipsum in here"
    }, {
      imageUrl: "",
      date: "August 27",
      title: "Register for thing",
      body: "Register for the upcoming event that is coming"
    }, {
      imageUrl: "",
      date: "December 12",
      title: "Last Day of Classes",
      body: "Happy holidays"
    }, {
      imageUrl: "",
      date: "January 15",
      title: "Start of Spring Semester",
      body: "This is a blog post for the first day of the spring semester"
    }];
  }

}
