import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEstimatesModalComponent } from './upload-estimates-modal.component';

describe('UploadEstimatesModalComponent', () => {
  let component: UploadEstimatesModalComponent;
  let fixture: ComponentFixture<UploadEstimatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadEstimatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadEstimatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
