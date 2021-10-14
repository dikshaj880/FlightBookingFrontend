import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSearchResultsComponent } from './schedule-search-results.component';

describe('ScheduleSearchResultsComponent', () => {
  let component: ScheduleSearchResultsComponent;
  let fixture: ComponentFixture<ScheduleSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
