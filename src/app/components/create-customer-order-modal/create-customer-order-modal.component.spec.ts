import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerOrderModalComponent } from './create-customer-order-modal.component';

describe('CreateCustomerOrderModalComponent', () => {
  let component: CreateCustomerOrderModalComponent;
  let fixture: ComponentFixture<CreateCustomerOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
