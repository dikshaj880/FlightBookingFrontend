import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  allFlights: Object| any;
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.getLatestBookings();
  }

  getLatestBookings() {
    this.flightService.getAllBBookings().subscribe((Response: any)=>{
      this.allFlights = Response
    })
  }

  deleteBooking(flight:any){
    this.flightService.deleteBooking(flight).subscribe(()=>{
      this.getLatestBookings();
    })
  }


}
