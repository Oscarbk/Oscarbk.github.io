import {Component, OnInit} from '@angular/core';
import {BlogPost} from "./modules/BlogPost";
import {Calendar, CalendarOptions} from "@fullcalendar/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'shpe-website';
  blogPosts: BlogPost[] = [];
  //calendarOptions!: CalendarOptions;
  Events = [];
  active: any;
  calendarOptions!: CalendarOptions
  testvar: string = ""

  constructor(private httpClient: HttpClient) { }

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr)
  }

  ngOnInit(){
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

  test() {
    this.testvar = "clicking on tab"
    setTimeout(() => {

      this.calendarOptions = {
      contentHeight: "auto",
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.Events
    };
    }, 160);

  }
}
