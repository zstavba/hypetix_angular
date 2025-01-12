import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCurrencieComponent } from './cc-currencie.component';

describe('CcCurrencieComponent', () => {
  let component: CcCurrencieComponent;
  let fixture: ComponentFixture<CcCurrencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcCurrencieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcCurrencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
