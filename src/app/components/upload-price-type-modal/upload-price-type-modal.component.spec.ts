import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPriceTypeModalComponent } from './upload-price-type-modal.component';

describe('UploadPriceTypeModalComponent', () => {
  let component: UploadPriceTypeModalComponent;
  let fixture: ComponentFixture<UploadPriceTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPriceTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPriceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
