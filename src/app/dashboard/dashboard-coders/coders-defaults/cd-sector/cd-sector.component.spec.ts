import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSectorComponent } from './cd-sector.component';

describe('CdSectorComponent', () => {
  let component: CdSectorComponent;
  let fixture: ComponentFixture<CdSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
