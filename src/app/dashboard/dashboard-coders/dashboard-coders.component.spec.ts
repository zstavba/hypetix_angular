import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCodersComponent } from './dashboard-coders.component';

describe('DashboardCodersComponent', () => {
  let component: DashboardCodersComponent;
  let fixture: ComponentFixture<DashboardCodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCodersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
