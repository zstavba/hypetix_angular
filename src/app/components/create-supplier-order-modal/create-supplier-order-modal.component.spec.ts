import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplierOrderModalComponent } from './create-supplier-order-modal.component';

describe('CreateSupplierOrderModalComponent', () => {
  let component: CreateSupplierOrderModalComponent;
  let fixture: ComponentFixture<CreateSupplierOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSupplierOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSupplierOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
