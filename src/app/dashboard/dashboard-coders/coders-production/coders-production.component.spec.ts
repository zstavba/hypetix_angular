import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersProductionComponent } from './coders-production.component';

describe('CodersProductionComponent', () => {
  let component: CodersProductionComponent;
  let fixture: ComponentFixture<CodersProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodersProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
