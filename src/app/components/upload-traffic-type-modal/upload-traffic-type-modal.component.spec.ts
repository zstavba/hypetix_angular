import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTrafficTypeModalComponent } from './upload-traffic-type-modal.component';

describe('UploadTrafficTypeModalComponent', () => {
  let component: UploadTrafficTypeModalComponent;
  let fixture: ComponentFixture<UploadTrafficTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTrafficTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTrafficTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
