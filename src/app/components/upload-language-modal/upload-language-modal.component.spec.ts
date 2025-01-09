import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLanguageModalComponent } from './upload-language-modal.component';

describe('UploadLanguageModalComponent', () => {
  let component: UploadLanguageModalComponent;
  let fixture: ComponentFixture<UploadLanguageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadLanguageModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLanguageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
