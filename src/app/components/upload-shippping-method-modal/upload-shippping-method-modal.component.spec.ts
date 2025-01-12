import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadShipppingMethodModalComponent } from './upload-shippping-method-modal.component';

describe('UploadShipppingMethodModalComponent', () => {
  let component: UploadShipppingMethodModalComponent;
  let fixture: ComponentFixture<UploadShipppingMethodModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadShipppingMethodModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadShipppingMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
