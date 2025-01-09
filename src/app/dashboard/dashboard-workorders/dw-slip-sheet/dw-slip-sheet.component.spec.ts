import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwSlipSheetComponent } from './dw-slip-sheet.component';

describe('DwSlipSheetComponent', () => {
  let component: DwSlipSheetComponent;
  let fixture: ComponentFixture<DwSlipSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwSlipSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwSlipSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
