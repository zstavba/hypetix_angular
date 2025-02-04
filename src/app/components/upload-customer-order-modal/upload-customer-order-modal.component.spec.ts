import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCustomerOrderModalComponent } from './upload-customer-order-modal.component';

describe('UploadCustomerOrderModalComponent', () => {
  let component: UploadCustomerOrderModalComponent;
  let fixture: ComponentFixture<UploadCustomerOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCustomerOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCustomerOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
