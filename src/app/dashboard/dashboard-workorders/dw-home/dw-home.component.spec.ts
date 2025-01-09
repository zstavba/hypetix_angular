import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwHomeComponent } from './dw-home.component';

describe('DwHomeComponent', () => {
  let component: DwHomeComponent;
  let fixture: ComponentFixture<DwHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
