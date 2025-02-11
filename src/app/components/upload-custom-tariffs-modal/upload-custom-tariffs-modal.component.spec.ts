import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCustomTariffsModalComponent } from './upload-custom-tariffs-modal.component';

describe('UploadCustomTariffsModalComponent', () => {
  let component: UploadCustomTariffsModalComponent;
  let fixture: ComponentFixture<UploadCustomTariffsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCustomTariffsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCustomTariffsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
