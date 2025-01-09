import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwOperationSheetComponent } from './dw-operation-sheet.component';

describe('DwOperationSheetComponent', () => {
  let component: DwOperationSheetComponent;
  let fixture: ComponentFixture<DwOperationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwOperationSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwOperationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
