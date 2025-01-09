import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersArticlesComponent } from './coders-articles.component';

describe('CodersArticlesComponent', () => {
  let component: CodersArticlesComponent;
  let fixture: ComponentFixture<CodersArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodersArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodersArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
