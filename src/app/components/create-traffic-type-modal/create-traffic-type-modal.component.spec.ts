import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrafficTypeModalComponent } from './create-traffic-type-modal.component';

describe('CreateTrafficTypeModalComponent', () => {
  let component: CreateTrafficTypeModalComponent;
  let fixture: ComponentFixture<CreateTrafficTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrafficTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrafficTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
