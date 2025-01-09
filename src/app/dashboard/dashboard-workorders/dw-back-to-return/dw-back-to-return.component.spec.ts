import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBackToReturnComponent } from './dw-back-to-return.component';

describe('DwBackToReturnComponent', () => {
  let component: DwBackToReturnComponent;
  let fixture: ComponentFixture<DwBackToReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwBackToReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwBackToReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
