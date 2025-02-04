import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteRateSheetModalComponent } from './upadte-rate-sheet-modal.component';

describe('UpadteRateSheetModalComponent', () => {
  let component: UpadteRateSheetModalComponent;
  let fixture: ComponentFixture<UpadteRateSheetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpadteRateSheetModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadteRateSheetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
