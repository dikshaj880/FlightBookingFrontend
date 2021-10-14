import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFlightDiscountComponent } from './book-flight-discount.component';

describe('BookFlightDiscountComponent', () => {
  let component: BookFlightDiscountComponent;
  let fixture: ComponentFixture<BookFlightDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFlightDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFlightDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
