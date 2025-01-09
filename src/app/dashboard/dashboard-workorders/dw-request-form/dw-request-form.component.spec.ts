import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwRequestFormComponent } from './dw-request-form.component';

describe('DwRequestFormComponent', () => {
  let component: DwRequestFormComponent;
  let fixture: ComponentFixture<DwRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
