import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDeliveryConditionsModalComponent } from './upload-delivery-conditions-modal.component';

describe('UploadDeliveryConditionsModalComponent', () => {
  let component: UploadDeliveryConditionsModalComponent;
  let fixture: ComponentFixture<UploadDeliveryConditionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDeliveryConditionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDeliveryConditionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
