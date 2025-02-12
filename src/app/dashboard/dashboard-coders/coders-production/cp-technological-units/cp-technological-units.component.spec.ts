import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTechnologicalUnitsComponent } from './cp-technological-units.component';

describe('CpTechnologicalUnitsComponent', () => {
  let component: CpTechnologicalUnitsComponent;
  let fixture: ComponentFixture<CpTechnologicalUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpTechnologicalUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpTechnologicalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
