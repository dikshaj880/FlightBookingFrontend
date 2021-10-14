import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor(private flightService:FlightService,private route:Router) { }

  allSChedules: Object | undefined;
  htmlToAdd: string ="";

  ngOnInit(): void {
  }

  addSchedule(formObj: any){
    console.log(formObj)
    this.flightService.createSchedule(formObj).subscribe((Response)=>{
      console.log("Schedule has been added")
      alert("Schedule has been added")
      this.htmlToAdd = '<a routerLink="/manageSchedule"></a>';
      this.route.navigate(['/manageSchedule']);
      this.getLatestAirlines();
    })
  }
  getLatestAirlines() {
    this.flightService.getAllFlights().subscribe((Response)=>{
      this.allSChedules = Response
    })
  }
}
