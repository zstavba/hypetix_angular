import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkordersComponent } from './dashboard-workorders.component';

describe('DashboardWorkordersComponent', () => {
  let component: DashboardWorkordersComponent;
  let fixture: ComponentFixture<DashboardWorkordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWorkordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
