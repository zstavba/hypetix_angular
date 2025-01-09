import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdCountryComponent } from './cd-country.component';

describe('CdCountryComponent', () => {
  let component: CdCountryComponent;
  let fixture: ComponentFixture<CdCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
