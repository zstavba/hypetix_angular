import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCharacteristicsComponent } from './cp-characteristics.component';

describe('CpCharacteristicsComponent', () => {
  let component: CpCharacteristicsComponent;
  let fixture: ComponentFixture<CpCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpCharacteristicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
