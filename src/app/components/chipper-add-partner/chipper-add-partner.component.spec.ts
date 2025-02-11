import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipperAddPartnerComponent } from './chipper-add-partner.component';

describe('ChipperAddPartnerComponent', () => {
  let component: ChipperAddPartnerComponent;
  let fixture: ComponentFixture<ChipperAddPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipperAddPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipperAddPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
