import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCharacteristicsModalComponent } from './upload-characteristics-modal.component';

describe('UploadCharacteristicsModalComponent', () => {
  let component: UploadCharacteristicsModalComponent;
  let fixture: ComponentFixture<UploadCharacteristicsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCharacteristicsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCharacteristicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
