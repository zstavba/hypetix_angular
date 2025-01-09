import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaArticlesListComponent } from './ca-articles-list.component';

describe('CaArticlesListComponent', () => {
  let component: CaArticlesListComponent;
  let fixture: ComponentFixture<CaArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaArticlesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
