import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExchangeRatesModalComponent } from './create-exchange-rates-modal.component';

describe('CreateExchangeRatesModalComponent', () => {
  let component: CreateExchangeRatesModalComponent;
  let fixture: ComponentFixture<CreateExchangeRatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExchangeRatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExchangeRatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
