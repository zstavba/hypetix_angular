import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComplaintsModalComponent } from './update-complaints-modal.component';

describe('UpdateComplaintsModalComponent', () => {
  let component: UpdateComplaintsModalComponent;
  let fixture: ComponentFixture<UpdateComplaintsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateComplaintsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateComplaintsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
