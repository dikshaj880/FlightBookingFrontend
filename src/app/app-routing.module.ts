import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { BookFlightDiscountComponent } from './book-flight-discount/book-flight-discount.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ScheduleSearchResultsComponent } from './schedule-search-results/schedule-search-results.component';
import { SearchScheduleComponent } from './search-schedule/search-schedule.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path: 'adminMenu',component:AdminMenuComponent},
  {path: 'userMenu',component:UserMenuComponent},
  {path: 'manageSchedule',component:ScheduleSearchResultsComponent},
  {path: 'manageAirline',component:ManageAirlinesComponent},
  {path: 'addAirline',component:AddAirlineComponent},
  {path: 'bookFlight',component:BookFlightComponent},
  {path: 'manageBookings',component:ManageBookingsComponent},
  {path: 'bookingHistory',component:BookingHistoryComponent},
  {path: 'bookFlightDiscount',component:BookFlightDiscountComponent},
  {path: 'searchSchedule',component:SearchScheduleComponent},
  {path: 'userLogin',component:UserLoginComponent},
  {path: 'userSignup',component:UserSignupComponent},
  {path: 'addSchedule',component:AddScheduleComponent},
  {path: '',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AdminMenuComponent,UserMenuComponent,
  ScheduleSearchResultsComponent,ManageAirlinesComponent,AddAirlineComponent,BookFlightComponent,
  ManageBookingsComponent,BookingHistoryComponent,BookFlightDiscountComponent,SearchScheduleComponent,
  UserLoginComponent,UserSignupComponent]