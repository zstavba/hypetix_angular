import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDebitNotesModalComponent } from './create-debit-notes-modal.component';

describe('CreateDebitNotesModalComponent', () => {
  let component: CreateDebitNotesModalComponent;
  let fixture: ComponentFixture<CreateDebitNotesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDebitNotesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDebitNotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
