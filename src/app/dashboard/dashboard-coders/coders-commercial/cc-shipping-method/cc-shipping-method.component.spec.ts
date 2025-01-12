import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcShippingMethodComponent } from './cc-shipping-method.component';

describe('CcShippingMethodComponent', () => {
  let component: CcShippingMethodComponent;
  let fixture: ComponentFixture<CcShippingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcShippingMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcShippingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
