import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcExchangeRatesComponent } from './cc-exchange-rates.component';

describe('CcExchangeRatesComponent', () => {
  let component: CcExchangeRatesComponent;
  let fixture: ComponentFixture<CcExchangeRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcExchangeRatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
