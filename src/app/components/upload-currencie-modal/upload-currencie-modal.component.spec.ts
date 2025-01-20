import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCurrencieModalComponent } from './upload-currencie-modal.component';

describe('UploadCurrencieModalComponent', () => {
  let component: UploadCurrencieModalComponent;
  let fixture: ComponentFixture<UploadCurrencieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCurrencieModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCurrencieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
