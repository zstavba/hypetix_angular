import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdWorkCentersComponent } from './cd-work-centers.component';

describe('CdWorkCentersComponent', () => {
  let component: CdWorkCentersComponent;
  let fixture: ComponentFixture<CdWorkCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdWorkCentersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdWorkCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
