import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSectorModalComponent } from './upload-sector-modal.component';

describe('UploadSectorModalComponent', () => {
  let component: UploadSectorModalComponent;
  let fixture: ComponentFixture<UploadSectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSectorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
