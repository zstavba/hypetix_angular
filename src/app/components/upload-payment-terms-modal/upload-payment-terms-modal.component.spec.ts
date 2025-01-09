import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPaymentTermsModalComponent } from './upload-payment-terms-modal.component';

describe('UploadPaymentTermsModalComponent', () => {
  let component: UploadPaymentTermsModalComponent;
  let fixture: ComponentFixture<UploadPaymentTermsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPaymentTermsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPaymentTermsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
