import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkCenterModalComponent } from './create-work-center-modal.component';

describe('CreateWorkCenterModalComponent', () => {
  let component: CreateWorkCenterModalComponent;
  let fixture: ComponentFixture<CreateWorkCenterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWorkCenterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkCenterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
