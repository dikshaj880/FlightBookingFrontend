import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  allFlights: Object| any;
  finalFlights : Object| any;
  allTickets: Object| any;
  allFlightsBySrcDest: Object| any;
 
  constructor(private flightService:FlightService, private route:Router) { }
  htmlToAdd: string ="";

  ngOnInit(): void {
  }

  searchAirline(formObj:any){
    console.log("in function")
    console.log(formObj)
    this.flightService.getAllFlights().subscribe((Response)=>{
      this.allFlights = Response
    })
  }

  searchAirlineBySrcAndDest(formObj:any){
    console.log("in function")
    console.log(formObj)
    this.flightService.getAllFlightsBySrcAndDest(formObj.source,formObj.Destination).subscribe((Response)=>{
      this.allFlightsBySrcDest = Response
    })
  }

  bookTicket(flight:any){
    this.flightService.createBooking(flight).subscribe((Response)=>{
      this.allTickets = Response
      alert("booking is confirmed.. you can check your bookings in manage booking tab")
      this.htmlToAdd = '<a routerLink="/manageBookings"></a>';
      this.route.navigate(['/manageBookings']);
    })
  }
}
