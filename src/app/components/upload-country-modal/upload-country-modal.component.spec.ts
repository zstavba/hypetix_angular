import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCountryModalComponent } from './upload-country-modal.component';

describe('UploadCountryModalComponent', () => {
  let component: UploadCountryModalComponent;
  let fixture: ComponentFixture<UploadCountryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCountryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
