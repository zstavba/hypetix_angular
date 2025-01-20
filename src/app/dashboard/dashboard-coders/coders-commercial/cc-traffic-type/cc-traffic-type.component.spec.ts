import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcTrafficTypeComponent } from './cc-traffic-type.component';

describe('CcTrafficTypeComponent', () => {
  let component: CcTrafficTypeComponent;
  let fixture: ComponentFixture<CcTrafficTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcTrafficTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcTrafficTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
