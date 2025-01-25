import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDebitNotesModalComponent } from './update-debit-notes-modal.component';

describe('UpdateDebitNotesModalComponent', () => {
  let component: UpdateDebitNotesModalComponent;
  let fixture: ComponentFixture<UpdateDebitNotesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDebitNotesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDebitNotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
