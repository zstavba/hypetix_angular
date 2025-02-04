import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSupplierOrderModalComponent } from './upload-supplier-order-modal.component';

describe('UploadSupplierOrderModalComponent', () => {
  let component: UploadSupplierOrderModalComponent;
  let fixture: ComponentFixture<UploadSupplierOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSupplierOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSupplierOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
