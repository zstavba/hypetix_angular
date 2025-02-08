import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePerformanceModalComponent } from './create-performance-modal.component';

describe('CreatePerformanceModalComponent', () => {
  let component: CreatePerformanceModalComponent;
  let fixture: ComponentFixture<CreatePerformanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePerformanceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePerformanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
