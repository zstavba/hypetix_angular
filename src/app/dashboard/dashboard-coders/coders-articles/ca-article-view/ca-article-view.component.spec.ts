import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaArticleViewComponent } from './ca-article-view.component';

describe('CaArticleViewComponent', () => {
  let component: CaArticleViewComponent;
  let fixture: ComponentFixture<CaArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaArticleViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
