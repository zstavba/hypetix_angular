import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTechnologicalInstructionsComponent } from './cp-technological-instructions.component';

describe('CpTechnologicalInstructionsComponent', () => {
  let component: CpTechnologicalInstructionsComponent;
  let fixture: ComponentFixture<CpTechnologicalInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpTechnologicalInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpTechnologicalInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
