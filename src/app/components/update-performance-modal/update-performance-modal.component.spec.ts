import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePerformanceModalComponent } from './update-performance-modal.component';

describe('UpdatePerformanceModalComponent', () => {
  let component: UpdatePerformanceModalComponent;
  let fixture: ComponentFixture<UpdatePerformanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePerformanceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePerformanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
