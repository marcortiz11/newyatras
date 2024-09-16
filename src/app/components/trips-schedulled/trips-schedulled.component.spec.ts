import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSchedulledComponent } from './trips-schedulled.component';

describe('TripsSchedulledComponent', () => {
  let component: TripsSchedulledComponent;
  let fixture: ComponentFixture<TripsSchedulledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsSchedulledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsSchedulledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
