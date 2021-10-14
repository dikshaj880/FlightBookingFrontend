import { Component, OnInit } from '@angular/core';
import { AddAirlineComponent } from '../add-airline/add-airline.component';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {
  allAirline: Object| any;

  constructor(private airlineService:AirlinesService) { }

  ngOnInit() {
    this.getLatestAirlines()
  }

  getLatestAirlines() {
    this.airlineService.getAllAirlines().subscribe((Response)=>{
      this.allAirline = Response
    })
  }

  deleteAirline(airline:any){
    console.log("in delete airline method")
    this.airlineService.deleteAirlines(airline).subscribe(()=>{
      this.getLatestAirlines();
    })
  }
}
