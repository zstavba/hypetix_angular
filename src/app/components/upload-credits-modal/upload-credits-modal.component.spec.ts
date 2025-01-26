import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCreditsModalComponent } from './upload-credits-modal.component';

describe('UploadCreditsModalComponent', () => {
  let component: UploadCreditsModalComponent;
  let fixture: ComponentFixture<UploadCreditsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCreditsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCreditsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
