import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBackToProductionComponent } from './dw-back-to-production.component';

describe('DwBackToProductionComponent', () => {
  let component: DwBackToProductionComponent;
  let fixture: ComponentFixture<DwBackToProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwBackToProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwBackToProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
