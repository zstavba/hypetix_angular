import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcPriceTypeComponent } from './cc-price-type.component';

describe('CcPriceTypeComponent', () => {
  let component: CcPriceTypeComponent;
  let fixture: ComponentFixture<CcPriceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcPriceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcPriceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
