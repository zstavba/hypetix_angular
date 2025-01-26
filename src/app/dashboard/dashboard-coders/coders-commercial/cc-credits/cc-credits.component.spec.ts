import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCreditsComponent } from './cc-credits.component';

describe('CcCreditsComponent', () => {
  let component: CcCreditsComponent;
  let fixture: ComponentFixture<CcCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcCreditsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
