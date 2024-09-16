import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YatrasInformationComponent } from './yatras-information.component';

describe('YatrasInformationComponent', () => {
  let component: YatrasInformationComponent;
  let fixture: ComponentFixture<YatrasInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YatrasInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YatrasInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
