import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriceTypeModalComponent } from './update-price-type-modal.component';

describe('UpdatePriceTypeModalComponent', () => {
  let component: UpdatePriceTypeModalComponent;
  let fixture: ComponentFixture<UpdatePriceTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePriceTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePriceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
