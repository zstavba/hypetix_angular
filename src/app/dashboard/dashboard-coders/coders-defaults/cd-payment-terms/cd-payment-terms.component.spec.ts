import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPaymentTermsComponent } from './cd-payment-terms.component';

describe('CdPaymentTermsComponent', () => {
  let component: CdPaymentTermsComponent;
  let fixture: ComponentFixture<CdPaymentTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdPaymentTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdPaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
