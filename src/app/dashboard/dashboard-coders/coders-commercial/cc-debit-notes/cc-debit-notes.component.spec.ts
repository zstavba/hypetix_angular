import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcDebitNotesComponent } from './cc-debit-notes.component';

describe('CcDebitNotesComponent', () => {
  let component: CcDebitNotesComponent;
  let fixture: ComponentFixture<CcDebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcDebitNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
