import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDebitNotesModalComponent } from './upload-debit-notes-modal.component';

describe('UploadDebitNotesModalComponent', () => {
  let component: UploadDebitNotesModalComponent;
  let fixture: ComponentFixture<UploadDebitNotesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDebitNotesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDebitNotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
