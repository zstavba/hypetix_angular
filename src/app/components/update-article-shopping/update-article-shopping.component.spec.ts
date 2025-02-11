import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleShoppingComponent } from './update-article-shopping.component';

describe('UpdateArticleShoppingComponent', () => {
  let component: UpdateArticleShoppingComponent;
  let fixture: ComponentFixture<UpdateArticleShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArticleShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticleShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
