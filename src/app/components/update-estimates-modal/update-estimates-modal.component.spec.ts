import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstimatesModalComponent } from './update-estimates-modal.component';

describe('UpdateEstimatesModalComponent', () => {
  let component: UpdateEstimatesModalComponent;
  let fixture: ComponentFixture<UpdateEstimatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEstimatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEstimatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
