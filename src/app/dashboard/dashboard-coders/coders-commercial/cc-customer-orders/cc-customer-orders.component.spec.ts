import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCustomerOrdersComponent } from './cc-customer-orders.component';

describe('CcCustomerOrdersComponent', () => {
  let component: CcCustomerOrdersComponent;
  let fixture: ComponentFixture<CcCustomerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcCustomerOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcCustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
