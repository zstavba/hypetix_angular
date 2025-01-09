import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdControlPlanComponent } from './cd-control-plan.component';

describe('CdControlPlanComponent', () => {
  let component: CdControlPlanComponent;
  let fixture: ComponentFixture<CdControlPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdControlPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdControlPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
