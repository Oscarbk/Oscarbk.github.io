import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;
  Events = [
    {
      title: "Classes Start",
      start: "2021-08-30"
    },
    {
      title: "Labor Day",
      start: "2021-09-06"
    },
    {
      title: "Fall Break",
      start: "2021-10-22"
    },
    {
      title: "Thanksgiving Break",
      start: "2021-11-24",
      end: "2021-11-27"
    },
    {
      title: "Last Day of Classes",
      start: "2021-12-11"
    },
    {
      title: "Welcome/Intro Meeting",
      start: "2021-09-07",
      end: "2021-09-10",
      color: "DarkGoldenRod"
    },
    {
      title: "Social Night w GW Fuego",
      start: "2021-09-24",
      color: "Crimson"
    },
    {
      title: "Resume Workshop",
      start: "2021-10-04",
      end: "2021-10-08",
      color: "DarkGoldenRod"
    },
    {
      title: "Interview Prep",
      start: "2021-10-18",
      end: "2021-10-22",
      color: "DarkGoldenRod"
    },
    {
      title: "Social Event (TBD)",
      start: "2021-11-01",
      end: "2021-11-05",
      color: "Crimson"
    },
    {
      title: "GWU SHPE Elections",
      start: "2021-11-29",
      end: "2021-12-03",
      color: "DarkGoldenRod"
    },
  ];

  constructor() { }

  /*onDateClick(res: any) {
    //alert('Clicked on date : ' + res.dateStr)
  }*/

  // TODO: Figure out how to safely render calendar component
  ngOnInit(): void {
    setTimeout(() => {
      this.calendarOptions = {
        contentHeight: "auto",
        initialView: 'dayGridMonth',
        //dateClick: this.onDateClick.bind(this),
        events: this.Events
      };
    }, 400);

  }


}
