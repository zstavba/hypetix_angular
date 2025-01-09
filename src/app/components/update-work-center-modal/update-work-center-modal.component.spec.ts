import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkCenterModalComponent } from './update-work-center-modal.component';

describe('UpdateWorkCenterModalComponent', () => {
  let component: UpdateWorkCenterModalComponent;
  let fixture: ComponentFixture<UpdateWorkCenterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateWorkCenterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWorkCenterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
