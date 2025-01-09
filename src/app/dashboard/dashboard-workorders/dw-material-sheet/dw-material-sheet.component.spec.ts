import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMaterialSheetComponent } from './dw-material-sheet.component';

describe('DwMaterialSheetComponent', () => {
  let component: DwMaterialSheetComponent;
  let fixture: ComponentFixture<DwMaterialSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwMaterialSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwMaterialSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
