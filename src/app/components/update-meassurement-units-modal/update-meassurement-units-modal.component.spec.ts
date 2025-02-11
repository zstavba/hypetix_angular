import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeassurementUnitsModalComponent } from './update-meassurement-units-modal.component';

describe('UpdateMeassurementUnitsModalComponent', () => {
  let component: UpdateMeassurementUnitsModalComponent;
  let fixture: ComponentFixture<UpdateMeassurementUnitsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMeassurementUnitsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMeassurementUnitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
