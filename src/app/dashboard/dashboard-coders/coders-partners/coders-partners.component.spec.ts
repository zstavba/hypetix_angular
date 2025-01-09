import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersPartnersComponent } from './coders-partners.component';

describe('CodersPartnersComponent', () => {
  let component: CodersPartnersComponent;
  let fixture: ComponentFixture<CodersPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodersPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
