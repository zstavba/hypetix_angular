import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePriceTypeModalComponent } from './create-price-type-modal.component';

describe('CreatePriceTypeModalComponent', () => {
  let component: CreatePriceTypeModalComponent;
  let fixture: ComponentFixture<CreatePriceTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePriceTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePriceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
