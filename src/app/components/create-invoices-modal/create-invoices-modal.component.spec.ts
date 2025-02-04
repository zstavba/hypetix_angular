import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoicesModalComponent } from './create-invoices-modal.component';

describe('CreateInvoicesModalComponent', () => {
  let component: CreateInvoicesModalComponent;
  let fixture: ComponentFixture<CreateInvoicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInvoicesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInvoicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
