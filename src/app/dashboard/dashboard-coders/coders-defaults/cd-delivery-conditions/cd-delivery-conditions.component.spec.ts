import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDeliveryConditionsComponent } from './cd-delivery-conditions.component';

describe('CdDeliveryConditionsComponent', () => {
  let component: CdDeliveryConditionsComponent;
  let fixture: ComponentFixture<CdDeliveryConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdDeliveryConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdDeliveryConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
