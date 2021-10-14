import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  //HOST:string = "http://localhost:3000/airlines"
  

  constructor(private _http:HttpClient) { }

  createAilrine(airline: any){
    return this._http.post("http://localhost:8098/api/v1.0/flight/airlines",airline);
  }

  getAllAirlines(){
    return this._http.get("http://localhost:8098/api/v1.0/flight/airlines")
  }

  deleteAirlines(airline:any){
    return this._http.delete("http://localhost:8098/api/v1.0/flight/airlines/" + airline.id)
  }
}
