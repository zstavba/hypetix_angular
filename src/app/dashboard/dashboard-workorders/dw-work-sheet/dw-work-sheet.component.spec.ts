import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwWorkSheetComponent } from './dw-work-sheet.component';

describe('DwWorkSheetComponent', () => {
  let component: DwWorkSheetComponent;
  let fixture: ComponentFixture<DwWorkSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwWorkSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwWorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
