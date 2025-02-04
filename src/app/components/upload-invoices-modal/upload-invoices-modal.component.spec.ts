import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInvoicesModalComponent } from './upload-invoices-modal.component';

describe('UploadInvoicesModalComponent', () => {
  let component: UploadInvoicesModalComponent;
  let fixture: ComponentFixture<UploadInvoicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadInvoicesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadInvoicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
