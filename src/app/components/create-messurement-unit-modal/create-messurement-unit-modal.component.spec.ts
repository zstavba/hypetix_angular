import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMessurementUnitModalComponent } from './create-messurement-unit-modal.component';

describe('CreateMessurementUnitModalComponent', () => {
  let component: CreateMessurementUnitModalComponent;
  let fixture: ComponentFixture<CreateMessurementUnitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMessurementUnitModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMessurementUnitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
