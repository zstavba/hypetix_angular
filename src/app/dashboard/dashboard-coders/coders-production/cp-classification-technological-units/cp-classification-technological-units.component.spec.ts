import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpClassificationTechnologicalUnitsComponent } from './cp-classification-technological-units.component';

describe('CpClassificationTechnologicalUnitsComponent', () => {
  let component: CpClassificationTechnologicalUnitsComponent;
  let fixture: ComponentFixture<CpClassificationTechnologicalUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpClassificationTechnologicalUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpClassificationTechnologicalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
