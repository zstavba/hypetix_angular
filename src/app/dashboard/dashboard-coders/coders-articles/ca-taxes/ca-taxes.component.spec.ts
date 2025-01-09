import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaTaxesComponent } from './ca-taxes.component';

describe('CaTaxesComponent', () => {
  let component: CaTaxesComponent;
  let fixture: ComponentFixture<CaTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaTaxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
