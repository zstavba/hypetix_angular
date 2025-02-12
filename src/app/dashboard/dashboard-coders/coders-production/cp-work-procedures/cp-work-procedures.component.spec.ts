import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpWorkProceduresComponent } from './cp-work-procedures.component';

describe('CpWorkProceduresComponent', () => {
  let component: CpWorkProceduresComponent;
  let fixture: ComponentFixture<CpWorkProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpWorkProceduresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpWorkProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
