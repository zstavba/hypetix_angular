import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcRateSheetComponent } from './cc-rate-sheet.component';

describe('CcRateSheetComponent', () => {
  let component: CcRateSheetComponent;
  let fixture: ComponentFixture<CcRateSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcRateSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcRateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
