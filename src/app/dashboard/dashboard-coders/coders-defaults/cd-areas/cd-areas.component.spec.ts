import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdAreasComponent } from './cd-areas.component';

describe('CdAreasComponent', () => {
  let component: CdAreasComponent;
  let fixture: ComponentFixture<CdAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
