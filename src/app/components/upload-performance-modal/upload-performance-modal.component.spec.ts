import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPerformanceModalComponent } from './upload-performance-modal.component';

describe('UploadPerformanceModalComponent', () => {
  let component: UploadPerformanceModalComponent;
  let fixture: ComponentFixture<UploadPerformanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPerformanceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPerformanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
