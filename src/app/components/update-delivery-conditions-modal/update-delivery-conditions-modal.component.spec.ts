import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryConditionsModalComponent } from './update-delivery-conditions-modal.component';

describe('UpdateDeliveryConditionsModalComponent', () => {
  let component: UpdateDeliveryConditionsModalComponent;
  let fixture: ComponentFixture<UpdateDeliveryConditionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDeliveryConditionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeliveryConditionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
