import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentTermsModalComponent } from './update-payment-terms-modal.component';

describe('UpdatePaymentTermsModalComponent', () => {
  let component: UpdatePaymentTermsModalComponent;
  let fixture: ComponentFixture<UpdatePaymentTermsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePaymentTermsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentTermsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
