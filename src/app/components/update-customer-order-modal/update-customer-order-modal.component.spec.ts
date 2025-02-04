import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerOrderModalComponent } from './update-customer-order-modal.component';

describe('UpdateCustomerOrderModalComponent', () => {
  let component: UpdateCustomerOrderModalComponent;
  let fixture: ComponentFixture<UpdateCustomerOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
