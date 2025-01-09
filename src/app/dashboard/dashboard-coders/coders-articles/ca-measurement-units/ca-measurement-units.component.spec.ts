import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaMeasurementUnitsComponent } from './ca-measurement-units.component';

describe('CaMeasurementUnitsComponent', () => {
  let component: CaMeasurementUnitsComponent;
  let fixture: ComponentFixture<CaMeasurementUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaMeasurementUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
