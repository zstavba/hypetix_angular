import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpQmComponent } from './cp-qm.component';

describe('CpQmComponent', () => {
  let component: CpQmComponent;
  let fixture: ComponentFixture<CpQmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpQmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpQmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
