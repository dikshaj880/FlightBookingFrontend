import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  allAirline: Object | undefined;
 

  constructor(private airlineService:AirlinesService,private route:Router) {

  }
  htmlToAdd: string ="";
  ngOnInit(): void {
  }

  addAirline(formObj: any){
    console.log(formObj)
    this.airlineService.createAilrine(formObj).subscribe((Response)=>{
      console.log("Airline has been added")
      alert("Airline has been added")
      this.htmlToAdd = '<a routerLink="/manageAirline"></a>';
      this.route.navigate(['/manageAirline']);
      this.getLatestAirlines();
    })
  }
  getLatestAirlines() {
    this.airlineService.getAllAirlines().subscribe((Response)=>{
      this.allAirline = Response
    })
  }
}
