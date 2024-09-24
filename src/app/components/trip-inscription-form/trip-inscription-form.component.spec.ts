import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInscriptionFormComponent } from './trip-inscription-form.component';

describe('TripInscriptionFormComponent', () => {
  let component: TripInscriptionFormComponent;
  let fixture: ComponentFixture<TripInscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripInscriptionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripInscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
