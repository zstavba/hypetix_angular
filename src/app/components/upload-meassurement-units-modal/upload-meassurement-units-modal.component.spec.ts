import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMeassurementUnitsModalComponent } from './upload-meassurement-units-modal.component';

describe('UploadMeassurementUnitsModalComponent', () => {
  let component: UploadMeassurementUnitsModalComponent;
  let fixture: ComponentFixture<UploadMeassurementUnitsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMeassurementUnitsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMeassurementUnitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
