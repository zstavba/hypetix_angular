import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleTypeModalComponent } from './create-article-modal.component';

describe('CreateArticleTypeModalComponent', () => {
  let component: CreateArticleTypeModalComponent;
  let fixture: ComponentFixture<CreateArticleTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateArticleTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArticleTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
