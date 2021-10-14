import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private _http:HttpClient) { }

  getAllFlights(){
    return this._http.get("http://localhost:9090/flight/all-flights")
  }
  
  createSchedule(schedule: any){
    return this._http.post("http://localhost:9090/schedule/schedules",schedule);
  }

  getAllFlightsBySrcAndDest(source:string,destination:string){
    return this._http.get(`http://localhost:9090/schedule/schedules/srcDest?src=${source}&dest=${destination}`)
  }

  getAllBBookings(){
    return this._http.get("http://localhost:9090/flight/bookings")
  }

  createBooking(booking: any){
    return this._http.post("http://localhost:9090/flight/bookings",booking);
  }
 
  deleteBooking(flight:any){
    return this._http.delete("http://localhost:9090/flight/bookings/" + flight.id)
  }

  deleteSchedule(schedule:any){
    return this._http.delete("http://localhost:9090/schedule/schedules/" + schedule.id)
  }
}
