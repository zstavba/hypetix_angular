import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplierOrderModalComponent } from './update-supplier-order-modal.component';

describe('UpdateSupplierOrderModalComponent', () => {
  let component: UpdateSupplierOrderModalComponent;
  let fixture: ComponentFixture<UpdateSupplierOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSupplierOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSupplierOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
