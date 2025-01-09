import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCustomTariffsComponent } from './ca-custom-tariffs.component';

describe('CaCustomTariffsComponent', () => {
  let component: CaCustomTariffsComponent;
  let fixture: ComponentFixture<CaCustomTariffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaCustomTariffsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCustomTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
