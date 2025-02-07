import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcEstimatesComponent } from './cc-estimates.component';

describe('CcEstimatesComponent', () => {
  let component: CcEstimatesComponent;
  let fixture: ComponentFixture<CcEstimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcEstimatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
