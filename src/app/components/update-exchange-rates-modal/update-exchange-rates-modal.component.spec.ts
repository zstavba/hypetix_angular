import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExchangeRatesModalComponent } from './update-exchange-rates-modal.component';

describe('UpdateExchangeRatesModalComponent', () => {
  let component: UpdateExchangeRatesModalComponent;
  let fixture: ComponentFixture<UpdateExchangeRatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExchangeRatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExchangeRatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
