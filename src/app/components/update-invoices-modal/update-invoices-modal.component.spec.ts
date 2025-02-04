import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvoicesModalComponent } from './update-invoices-modal.component';

describe('UpdateInvoicesModalComponent', () => {
  let component: UpdateInvoicesModalComponent;
  let fixture: ComponentFixture<UpdateInvoicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateInvoicesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInvoicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
