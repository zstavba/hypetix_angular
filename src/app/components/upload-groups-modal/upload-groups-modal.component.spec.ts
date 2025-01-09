import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGroupsModalComponent } from './upload-groups-modal.component';

describe('UploadGroupsModalComponent', () => {
  let component: UploadGroupsModalComponent;
  let fixture: ComponentFixture<UploadGroupsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadGroupsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadGroupsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
