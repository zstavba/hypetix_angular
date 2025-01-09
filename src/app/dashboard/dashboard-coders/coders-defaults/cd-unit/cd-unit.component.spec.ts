import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdUnitComponent } from './cd-unit.component';

describe('CdUnitComponent', () => {
  let component: CdUnitComponent;
  let fixture: ComponentFixture<CdUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
