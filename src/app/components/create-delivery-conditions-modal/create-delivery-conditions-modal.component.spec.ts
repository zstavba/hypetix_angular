import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryConditionsModalComponent } from './create-delivery-conditions-modal.component';

describe('CreateDeliveryConditionsModalComponent', () => {
  let component: CreateDeliveryConditionsModalComponent;
  let fixture: ComponentFixture<CreateDeliveryConditionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDeliveryConditionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDeliveryConditionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
