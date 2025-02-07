import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstimatesModalComponent } from './create-estimates-modal.component';

describe('CreateEstimatesModalComponent', () => {
  let component: CreateEstimatesModalComponent;
  let fixture: ComponentFixture<CreateEstimatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEstimatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEstimatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
