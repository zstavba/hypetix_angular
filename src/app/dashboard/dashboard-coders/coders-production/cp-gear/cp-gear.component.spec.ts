import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpGearComponent } from './cp-gear.component';

describe('CpGearComponent', () => {
  let component: CpGearComponent;
  let fixture: ComponentFixture<CpGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
