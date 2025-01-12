import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipppingMethodModalComponent } from './update-shippping-method-modal.component';

describe('UpdateShipppingMethodModalComponent', () => {
  let component: UpdateShipppingMethodModalComponent;
  let fixture: ComponentFixture<UpdateShipppingMethodModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateShipppingMethodModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShipppingMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
