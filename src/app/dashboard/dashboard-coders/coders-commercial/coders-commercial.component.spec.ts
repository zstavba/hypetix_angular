import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersCommercialComponent } from './coders-commercial.component';

describe('CodersCommercialComponent', () => {
  let component: CodersCommercialComponent;
  let fixture: ComponentFixture<CodersCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodersCommercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
