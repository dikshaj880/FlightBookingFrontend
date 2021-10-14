import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-schedule-search-results',
  templateUrl: './schedule-search-results.component.html',
  styleUrls: ['./schedule-search-results.component.css']
})
export class ScheduleSearchResultsComponent implements OnInit {

  allSchedules: Object| any;

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.searchSchedules();
  }

  searchSchedules(){
    this.flightService.getAllFlights().subscribe((Response)=>{
      this.allSchedules = Response
    })
  }
  
  deleteSchedule(schedule:any){
    this.flightService.deleteSchedule(schedule).subscribe(()=>{
      this.searchSchedules();
    })
  }
}
