import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExchangeRatesModalComponent } from './upload-exchange-rates-modal.component';

describe('UploadExchangeRatesModalComponent', () => {
  let component: UploadExchangeRatesModalComponent;
  let fixture: ComponentFixture<UploadExchangeRatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadExchangeRatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadExchangeRatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
