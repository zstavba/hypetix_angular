import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersDefaultsComponent } from './coders-defaults.component';

describe('CodersDefaultsComponent', () => {
  let component: CodersDefaultsComponent;
  let fixture: ComponentFixture<CodersDefaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodersDefaultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
