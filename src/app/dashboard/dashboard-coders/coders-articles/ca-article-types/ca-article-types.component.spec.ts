import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaArticleTypesComponent } from './ca-article-types.component';

describe('CaArticleTypesComponent', () => {
  let component: CaArticleTypesComponent;
  let fixture: ComponentFixture<CaArticleTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaArticleTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaArticleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
