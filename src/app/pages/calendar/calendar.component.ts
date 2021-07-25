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
      start: "2021-08-27"
    },
    {
      title: "Orientation",
      start: "2021-08-27",
      color: "red"
    },
    {
      title: "SHPE National Convention",
      start: "2021-11-10",
      end: "2021-11-14"
    }
  ];

  constructor() { }

  onDateClick(res: any) {
    //alert('Clicked on date : ' + res.dateStr)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.calendarOptions = {
        contentHeight: "auto",
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events
      };
    }, 210);

  }


}
