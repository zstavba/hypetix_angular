import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInvoicesComponent } from './cc-invoices.component';

describe('CcInvoicesComponent', () => {
  let component: CcInvoicesComponent;
  let fixture: ComponentFixture<CcInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
