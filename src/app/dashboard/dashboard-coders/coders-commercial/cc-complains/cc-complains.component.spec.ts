import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcComplainsComponent } from './cc-complains.component';

describe('CcComplainsComponent', () => {
  let component: CcComplainsComponent;
  let fixture: ComponentFixture<CcComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcComplainsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
