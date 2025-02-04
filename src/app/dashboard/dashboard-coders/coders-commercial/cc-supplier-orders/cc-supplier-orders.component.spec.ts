import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSupplierOrdersComponent } from './cc-supplier-orders.component';

describe('CcSupplierOrdersComponent', () => {
  let component: CcSupplierOrdersComponent;
  let fixture: ComponentFixture<CcSupplierOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcSupplierOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcSupplierOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
