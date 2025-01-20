import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrafficTypeModalComponent } from './update-traffic-type-modal.component';

describe('UpdateTrafficTypeModalComponent', () => {
  let component: UpdateTrafficTypeModalComponent;
  let fixture: ComponentFixture<UpdateTrafficTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTrafficTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrafficTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
