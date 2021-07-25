import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;
  Events = [];

  constructor() { }

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr)
  }

  ngOnInit(): void {
    setTimeout(() => {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.Events
    };
    }, 1000);
  }


}
