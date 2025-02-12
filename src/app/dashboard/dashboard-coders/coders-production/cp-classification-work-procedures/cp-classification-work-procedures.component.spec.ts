import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpClassificationWorkProceduresComponent } from './cp-classification-work-procedures.component';

describe('CpClassificationWorkProceduresComponent', () => {
  let component: CpClassificationWorkProceduresComponent;
  let fixture: ComponentFixture<CpClassificationWorkProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpClassificationWorkProceduresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpClassificationWorkProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
