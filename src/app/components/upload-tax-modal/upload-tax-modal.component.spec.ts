import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTaxModalComponent } from './upload-tax-modal.component';

describe('UploadTaxModalComponent', () => {
  let component: UploadTaxModalComponent;
  let fixture: ComponentFixture<UploadTaxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTaxModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTaxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
