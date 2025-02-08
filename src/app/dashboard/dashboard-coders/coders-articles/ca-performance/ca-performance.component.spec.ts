import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPerformanceComponent } from './ca-performance.component';

describe('CaPerformanceComponent', () => {
  let component: CaPerformanceComponent;
  let fixture: ComponentFixture<CaPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
