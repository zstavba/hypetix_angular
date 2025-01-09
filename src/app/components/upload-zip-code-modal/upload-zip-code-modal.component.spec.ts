import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadZipCodeModalComponent } from './upload-zip-code-modal.component';

describe('UploadZipCodeModalComponent', () => {
  let component: UploadZipCodeModalComponent;
  let fixture: ComponentFixture<UploadZipCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadZipCodeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadZipCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
